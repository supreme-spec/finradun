module.exports = {
  apps: [
    {
      name: 'finradun',
      cwd: '/root/www/finradun',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3002 -H 0.0.0.0',
      interpreter: 'node',
      autorestart: true,
      watch: false,
      max_restarts: 10,
      exp_backoff_restart_delay: 100,
      max_memory_restart: '1G',
      out_file: '/root/www/finradun/.pm2/logs/finradun.out.log',
      error_file: '/root/www/finradun/.pm2/logs/finradun.err.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      env: {
        NODE_ENV: 'production',
        PORT: '3002',
        HOSTNAME: '0.0.0.0',
      },
    },
  ],
};