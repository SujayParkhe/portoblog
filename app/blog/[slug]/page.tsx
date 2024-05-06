import { fetchSingleBlog } from "@/app/utils/fetchSingleBlog";
import ReactMarkdown from 'react-markdown';

const BlogBySlug = async (props: any) => {
  const blog = await fetchSingleBlog(props.params.slug);
  if (!blog || !blog.data || blog.data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="prose my-8">
      <h1>{blog.data[0].attributes.blogTitle}</h1>
      <ReactMarkdown>{blog.data[0].attributes.blogContent}</ReactMarkdown>
    </div>
  );
};

export default BlogBySlug;