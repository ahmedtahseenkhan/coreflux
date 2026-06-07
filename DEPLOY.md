# Deploying CoreFlux on the AWS server (pm2 + nginx)

CoreFlux is a **Next.js** app. Unlike the Vite client (which builds to static
`dist/`), Next.js runs as a **Node process**: build once, then keep `next start`
alive with pm2 on a port. nginx reverse-proxies the domain to that port.

App port: **3030** (change in `ecosystem.config.js` if taken — check with
`pm2 list` and `sudo lsof -i :3030`).

---

## 1. First deploy

```bash
# pick where your apps live, e.g. /var/www
cd /var/www
git clone https://github.com/ahmedtahseenkhan/coreflux.git
cd coreflux

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

## 3. nginx -> coreflux.com (do when DNS is ready)

Point `coreflux.com` (A record) at the server's public IP first. Then:

`/etc/nginx/sites-available/coreflux.com`
```nginx
server {
    listen 80;
    server_name coreflux.com www.coreflux.com;

    location / {
        proxy_pass http://127.0.0.1:3030;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/coreflux.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 4. HTTPS (Let's Encrypt)

```bash
sudo certbot --nginx -d coreflux.com -d www.coreflux.com
```

certbot rewrites the server block for 443 + auto-renews.

---

### Notes
- Make sure the AWS **security group** allows inbound 80/443. The app port
  (3030) stays internal — only nginx talks to it.
- Node 18+ required (server has a recent Node already for the other app).
- The `/api/contact` form currently no-ops (no backend). Wire it to an email
  service or an API route before relying on it.
