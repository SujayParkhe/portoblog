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
      categories {
        name
      }
      categories {
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
    }
  }
`;

const queries = {
  BlogsQuery,
  BlogBySlugQuery,
};
export default queries;
