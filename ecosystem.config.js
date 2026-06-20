// pm2 process config for CoreFlux (Next.js)
// Runs `npm start` -> `next start` on PORT (default 3030).
// Deploy:  pm2 start ecosystem.config.js   (run from this folder)
//
// SMTP / contact-form secrets are NOT defined here (this file is committed).
// Next.js auto-loads `.env.local` / `.env.production.local` from this folder at
// runtime, so create that file on the server with the SMTP_* vars (see DEPLOY.md,
// section "5. Email env"). Do NOT paste the Gmail app password into this file.
module.exports = {
  apps: [
    {
      name: "coreflux",
      cwd: __dirname,
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3030, // change if 3030 is taken on the server
        // SMTP_* / CONTACT_TO are loaded from .env.local — keep them out of git.
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "400M",
      time: true,
    },
  ],
};
