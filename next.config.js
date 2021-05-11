const path = require('path')

const config = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@boot': path.join(__dirname, 'src/ui/boot'),
      '@components': path.join(__dirname, 'src/ui/components'),
      '@config': path.join(__dirname, 'src/core/config'),
      '@hocs': path.join(__dirname, 'src/ui/hocs'),
      '@hooks': path.join(__dirname, 'src/ui/hooks'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@public': path.join(__dirname, './public'),
      '@services': path.join(__dirname, 'src/core/services'),
      '@store': path.join(__dirname, 'src/core/store'),
      '@styles': path.join(__dirname, 'src/ui/styles'),
      '@typings': path.join(__dirname, 'src/core/typings'),
      '@utils': path.join(__dirname, 'src/core/utils'),
      '@views': path.join(__dirname, 'src/ui/views'),
    }
    return config
  },
  experimental: {
    documentMiddleware: true,
  },
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
}

module.exports = config
