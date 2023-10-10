module.exports = {
    pageExtensions: ['jsx', 'js'], // Add 'tsx', 'ts' if you're using TypeScript
    webpack(config, options) {
      config.resolve.modules.push(__dirname); // Allow for absolute imports
      return config;
    },
  };
  