module.exports = {
  apps: [
    {
      name: "finradun",
      cwd: "/root/www/finradun",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3002 -H 0.0.0.0",
      interpreter: "node",
      autorestart: true,
      watch: false,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        PORT: "3002",
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
