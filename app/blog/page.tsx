import Posts from "@/components/Posts";
import { fetchBlogs } from "../utils/fetchBlogs";

const Blog = async () => {
  const blogs = await fetchBlogs();
  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-lg text-gray-600 font-medium">
        Dive into My Tech World: Explore Innovation and Insights.
      </p>
      <Posts blogs={blogs} />
    </div>
  );
};

export default Blog;
