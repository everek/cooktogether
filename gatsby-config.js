require(`dotenv`).config()
const fetch = require(`node-fetch`)
const { createHttpLink } = require(`apollo-link-http`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Hasura Starter`,
    description: `Demonstration of Gatsby and Hasura`,
    author: `@ksmorano`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Open Sans\:400, 500, 700`,
            `Chilanka\:400, 700` // you can also specify font weights and styles
          ],
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `hasura`,
        fieldName: `hasura`,
        createLink: () => {
          return createHttpLink({
            uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
            headers: {
              "x-hasura-admin-secret":
                process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET,
            },
            fetch,
          })
        },
        refetchInterval: 10,
      },
    },
  ],
}
