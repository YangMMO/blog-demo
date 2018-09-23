module.exports = {
  apps : [{
    name      : 'Blog',
    script    : './bin/www',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '134.175.56.234',
      ref  : 'origin/master',
      repo : 'git@github.com:YangMMO/blog-demo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
