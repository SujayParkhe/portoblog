import Posts from "@/components/Posts";
import services from "@/app/services";

const Blog = async () => {
  const blogs = await services.queryBlogs();
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
