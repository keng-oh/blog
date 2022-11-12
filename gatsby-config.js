require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `KENZINE`,
    author: `Keng`,
    description: ``,
    siteUrl: `https://ken-g.dev/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //     publisherId: process.env.NETLIFY_GOOGLE_ADS_ID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.NETLIFY_GA_TRACKING_ID,
    //     head: true,
    //     anonymize: true,
    //     respectDNT: true,
    //     //exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     pageTransitionDelay: 0,
    //     // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     defer: false,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
  ],
};
