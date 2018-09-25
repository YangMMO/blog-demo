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
      repo : 'https://github.com/YangMMO/blog-demo.git',
      path : '/data/www',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
