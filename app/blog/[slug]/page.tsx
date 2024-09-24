import services from "@/app/services";
import SharePost from "@/components/SharePost";
import Tags from "@/components/Tags";
import ReactMarkdown from "react-markdown";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogBySlug = async ({ params }: { params: { slug: string } }) => {
  const url = process.env.WEBSITE_URL;
  const blog = await services.queryBlogBySlug(params.slug);
  const postUrl = `${url}/blog/${params.slug}`;

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prose my-8">
      <h1>{blog.blogTitle}</h1>
      {blog.tags && blog.tags.length > 0 && <Tags tags={blog.tags} />}
      <ReactMarkdown>{blog.blogContent.markdown}</ReactMarkdown>
      <div className="flex items-center mt-4">
        <h2 className="text-lg font-medium m-0">
          Share this blog with others:
        </h2>
        <div className="ml-2">
          <SharePost url={postUrl} title={blog.blogTitle} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogBySlug;
