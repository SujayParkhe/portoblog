import services from "@/app/services";
import Tags from "@/components/Tags";
import ReactMarkdown from "react-markdown";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogBySlug = async ({ params }: { params: { slug: string } }) => {
  const blog = await services.queryBlogBySlug(params.slug);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prose my-8">
      <h1>{blog.blogTitle}</h1>
      {blog.tags && blog.tags.length > 0 && <Tags tags={blog.tags} />}
      <ReactMarkdown>{blog.blogContent.markdown}</ReactMarkdown>
      <ToastContainer />
    </div>
  );
};

export default BlogBySlug;
