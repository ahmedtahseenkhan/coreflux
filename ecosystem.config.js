// pm2 process config for CoreFlux (Next.js)
// Runs `npm start` -> `next start` on PORT (default 3030).
// Deploy:  pm2 start ecosystem.config.js   (run from this folder)
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
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "400M",
      time: true,
    },
  ],
};
