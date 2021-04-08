const path = require('path')

const config = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, 'src/components'),
      '@views': path.join(__dirname, 'src/views'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@utils': path.join(__dirname, 'src/utils'),
      '@services': path.join(__dirname, 'src/services'),
      '@redux': path.join(__dirname, 'src/redux'),
      '@public': path.join(__dirname, './public'),
      '@interfaces': path.join(__dirname, 'src/interfaces'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@assets': path.join(__dirname, 'src/assets'),
    }

    config.module.rules.push({
      test: /\.s?(c|a)ss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: (fileName, { query }) => query.type || 'scoped',
          },
        },
      ],
    })
    return config
  },
  experimental: {
    documentMiddleware: true,
  },
  future: {
    webpack5: true,
  },
}

module.exports = config
