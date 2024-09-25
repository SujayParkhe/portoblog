import { gql } from "@apollo/client";

// query for fetching multiple blogs
const BlogsQuery = gql`
  query Blogs {
    blogs(orderBy: createdAt_DESC) {
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

const RecentBlogsQuery = gql`
  query RecentBlogs {
    blogs(orderBy: createdAt_DESC, first: 2) {
      blogDate
      blogDescription
      blogTitle
      id
      slug
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
  RecentBlogsQuery,
};
export default queries;
