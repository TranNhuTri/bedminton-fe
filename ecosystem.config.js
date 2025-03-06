module.exports = {
  apps: [
    {
      name: 'nuxt-starter',
      exec_mode: 'cluster',
      instances: 1,
      script: './.output/server/index.mjs',
      append_env_to_name: true,
      port: process.env.PORT || 3000,
    },
  ],
};
