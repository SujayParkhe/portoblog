import graphqlFetcher from "./ApolloClient";
import queries from "./queries";

const queryBlogs = async (): Promise<Blog[]> => {
  const data = await graphqlFetcher(queries.BlogsQuery);
  const blogs = data.blogs;

  return blogs;
};

const queryRecentBlogs = async (): Promise<RecentBlogs[]> => {
  const data = await graphqlFetcher(queries.RecentBlogsQuery);
  const recentBlogs = data.blogs;

  return recentBlogs;
};

const queryBlogBySlug = async (slug: string): Promise<Blog | null> => {
  const data = await graphqlFetcher(queries.BlogBySlugQuery, { slug });
  const blog = data.blog;

  return blog || null;
};

const services = {
  queryBlogs,
  queryBlogBySlug,
  queryRecentBlogs,
};

export default services;
