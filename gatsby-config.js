module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://10.33.122.138:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'user',
          'section',
          'main-page'
        ],
        queryLimit: 1000,
      },
    },
  ]
};