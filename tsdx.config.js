import postcss from 'rollup-plugin-postcss';
import images from '@rollup/plugin-image';

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    return config;
  },
};
