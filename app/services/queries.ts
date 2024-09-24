import { gql } from "@apollo/client";

// query for fetching multiple blogs
const BlogsQuery = gql`
  query Blogs {
    blogs {
      blogDate
      blogDescription
      blogTitle
      createdAt
      blogContent {
        markdown
      }
      slug
      id
      tags {
        name
      }
    }
  }
`;

const BlogBySlugQuery = gql`
  query BlogBySlug($slug: String!) {
    blog(where: { slug: $slug }) {
      blogTitle
      blogContent {
        markdown
      }
      tags {
        name
      }
    }
  }
`;

const queries = {
  BlogsQuery,
  BlogBySlugQuery,
};
export default queries;
