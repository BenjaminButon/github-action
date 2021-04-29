const path = require('path')

const config = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.join(__dirname, 'src/assets'),
      '@components': path.join(__dirname, 'src/components'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@public': path.join(__dirname, './public'),
      '@services': path.join(__dirname, 'src/services'),
      '@store': path.join(__dirname, 'src/store'),
      '@utils': path.join(__dirname, 'src/utils'),
      '@views': path.join(__dirname, 'src/views'),
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
  reactStrictMode: true,
}

module.exports = config
