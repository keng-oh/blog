require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const renderOgImage = ({ title }) => {
  return `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
            </head>
            <body style="
              padding: 0;
              margin: 0;
            ">
              <div style="
                width: 1200px;
                height: 590px;
                background-color: #292D3F;
                color: #F1F0EE;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-bottom: 40px solid #6D757F;
              ">
                <div style="font-family: sans-serif; font-size: 60px; font-weight: bold; margin: 0 40px;">${title}</div>
                <div style="font-family: serif; font-size: 48px; margin: 160px 40px 0 auto;">https://blog.ken-g.dev/</div>
              </div>
            </body>
          </html>`
}

module.exports = {
  siteMetadata: {
    title: `KENZINE`,
    author: `Keng`,
    description: ``,
    siteUrl: `https://blog.ken-g.dev/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Keng Blog`,
        short_name: `keng Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/assets/profile-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.NETLIFY_API_KEY,
        serviceId: process.env.NETLIFY_SERVICE_ID,
        endpoint: "articles",
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.NETLIFY_API_KEY,
        serviceId: process.env.NETLIFY_SERVICE_ID,
        endpoint: "categories",
      },
    },
    {
      resolve: `@akr4/gatsby-plugin-og-image`,
      options: {
        render: renderOgImage,
        concurrency: 10,
      },
    },
  ],
}
