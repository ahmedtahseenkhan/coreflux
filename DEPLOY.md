# Deploying CoreFlux on the AWS server (pm2 + Apache)

CoreFlux is a **Next.js** app. Unlike the Vite client (which builds to static
`dist/`), Next.js runs as a **Node process**: build once, then keep `next start`
alive with pm2 on a port. **Apache** (the web server already running on the box)
reverse-proxies `corefluxsolutions.com` to that port.

App port: **3030** (change in `ecosystem.config.js` if taken — check with
`pm2 list` and `sudo lsof -i :3030`).

**Node 20 or newer is required** (nodemailer 10). Check with `node -v`.

---

## 1. First deploy

```bash
# pick where your apps live, e.g. /var/www
cd /var/www
git clone https://github.com/ahmedtahseenkhan/coreflux.git
cd coreflux

# create .env.production.local first (section 3) — the GA ID is read at build time
npm ci            # install exact deps from package-lock.json
npm run build     # production build -> .next/

pm2 start ecosystem.config.js
pm2 save          # persist across reboots (run `pm2 startup` once if not set up)

pm2 logs coreflux --lines 30   # confirm "Ready on http://localhost:3030"
curl -I http://localhost:3030  # should return 200
```

## 2. Updating after a push

```bash
cd /var/www/coreflux
git pull
npm ci
npm run build
pm2 reload coreflux   # zero-downtime restart
```

## 3. Environment (contact form email + analytics)

Secrets live in a **gitignored** env file that Next.js auto-loads — never
commit them. Create it once on the server:

```bash
cd /var/www/coreflux
cat > .env.production.local <<'EOF'
# Contact form -> Info@corefluxsolutions.com over SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-sending-account@gmail.com
SMTP_PASSWORD=your-gmail-app-password   # 16-char app password, not the login pwd
SMTP_FROM_NAME=corefluxsolutions
SMTP_FROM_EMAIL=Info@corefluxsolutions.com
CONTACT_TO=Info@corefluxsolutions.com

# Google Analytics 4 (Admin -> Data streams -> Web -> Measurement ID).
# Read at BUILD time: rebuild after changing it. Empty = no analytics, no cookie banner.
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
EOF
chmod 600 .env.production.local
npm run build && pm2 reload coreflux
```

> **Gmail note:** the From may show the authenticated Gmail account unless
> `Info@corefluxsolutions.com` is added as a verified "Send mail as" alias in that
> Gmail account (Settings → Accounts and Import → Send mail as).

## 4. Testing contact-form delivery

Submissions go: browser → `POST /api/contact` → SMTP (above) → `CONTACT_TO`.
If SMTP is missing or fails, the visitor's own email app opens instead,
pre-addressed to Info@corefluxsolutions.com, and the form tells them to press send.

1. **From the server** (bypasses the browser):

   ```bash
   curl -s -X POST http://localhost:3030/api/contact \
     -H "Content-Type: application/json" \
     -d '{"service":"ERP Solutions","name":"Deploy Test","email":"you@example.com","phone":"+1 555 010 2030","brief":"test"}'
   # {"ok":true,"delivered":true}   -> sent; check the Info@ inbox (and spam)
   # {"ok":true,"delivered":false}  -> SMTP env missing/wrong; see `pm2 logs coreflux`
   ```

2. **From the live site:** fill in the form on any page (wait a few seconds
   before submitting — instant submissions are treated as bots). You should see
   "Thanks — your request is in…" and receive the email. Replying to it should
   go to the visitor's address (Reply-To).

Spam protection: a hidden honeypot field, a minimum fill time, and a limit of
5 submissions per IP per 10 minutes (resets when the app restarts).

## 5. Apache reverse proxy, redirects and headers

Enable the modules once:

```bash
sudo a2enmod proxy proxy_http headers ssl
```

`/etc/apache2/sites-available/corefluxsolutions.com.conf` (if certbot already
created a `*-le-ssl.conf`, merge these blocks into it instead):

```apache
# http (both hosts) -> https://corefluxsolutions.com in one hop
<VirtualHost *:80>
    ServerName corefluxsolutions.com
    ServerAlias www.corefluxsolutions.com
    Redirect permanent / https://corefluxsolutions.com/
</VirtualHost>

# https://www -> https://corefluxsolutions.com
<VirtualHost *:443>
    ServerName www.corefluxsolutions.com
    SSLEngine on
    SSLCertificateFile    /etc/letsencrypt/live/corefluxsolutions.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/corefluxsolutions.com/privkey.pem
    Redirect permanent / https://corefluxsolutions.com/
</VirtualHost>

# The site
<VirtualHost *:443>
    ServerName corefluxsolutions.com
    SSLEngine on
    SSLCertificateFile    /etc/letsencrypt/live/corefluxsolutions.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/corefluxsolutions.com/privkey.pem

    ProxyPreserveHost On
    ProxyPass        / http://127.0.0.1:3030/
    ProxyPassReverse / http://127.0.0.1:3030/
    RequestHeader set X-Forwarded-Proto "https"

    # Next.js sends the other security headers; HSTS here also covers
    # responses Apache generates itself.
    Header always set Strict-Transport-Security "max-age=31536000"
</VirtualHost>
```

Hide the Apache version from the `Server` header — in
`/etc/apache2/conf-available/security.conf` set:

```apache
ServerTokens Prod
ServerSignature Off
```

Then:

```bash
sudo apache2ctl configtest && sudo systemctl reload apache2
curl -sI http://www.corefluxsolutions.com/services/erp | grep -i location
# -> location: https://corefluxsolutions.com/services/erp
```

## 6. HTTPS (Let's Encrypt)

```bash
sudo certbot --apache -d corefluxsolutions.com -d www.corefluxsolutions.com
```

certbot installs the certificate (covering both hosts) and auto-renews.

---

### Notes
- Make sure the AWS **security group** allows inbound 80/443. The app port
  (3030) stays internal — only Apache talks to it (the contact form's rate
  limit relies on Apache adding `X-Forwarded-For`).
- Without `.env.production.local` the form falls back to a mailto: link to
  Info@corefluxsolutions.com.
