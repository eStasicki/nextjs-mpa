require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },

  devIndicators: {
    autoPrerender: false,
  },

  webpack: (config) => {
    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object'
    );

    const fixUse = (use) => {
      if (use.loader.indexOf('css-loader') >= 0 && use.options.modules) {
        use.options.modules.mode = 'local';
      }
    };

    if (oneOf) {
      oneOf.oneOf.forEach((rule) => {
        if (Array.isArray(rule.use)) {
          rule.use.map(fixUse);
        } else if (rule.use && rule.use.loader) {
          fixUse(rule.use);
        }
      });
    }

    return config;
  },
};
