import services from "@/app/services";
import ReactMarkdown from "react-markdown";

const BlogBySlug = async ({ params }: { params: { slug: string } }) => {
  const blog = await services.queryBlogBySlug(params.slug);
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div className="prose my-8">
      <h1>{blog.blogTitle}</h1>
      <ReactMarkdown>{blog.blogContent.markdown}</ReactMarkdown>
    </div>
  );
};

export default BlogBySlug;
