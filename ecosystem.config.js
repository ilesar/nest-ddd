module.exports = {
  apps: [
    {
      name: 'app',
      script: 'dist/main.js',

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'dev',
        NO_COLOR: '1',
      },
    },
  ],
};
