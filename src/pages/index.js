import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';

const IndexPage = ({ data }) => {
  console.log(data);
  return <Layout></Layout>;
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allGraphCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        excerpt
        slug
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
