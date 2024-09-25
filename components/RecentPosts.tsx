import Link from "next/link";
import { TbArrowNarrowRight, TbCalendarEvent } from "react-icons/tb";

type RecentBlogProps = {
  blogs: RecentBlogs[];
};

const RecentPosts = (props: RecentBlogProps) => {
  return (
    <>
      <div className="py-14">
        <h1 className="text-2xl font-semibold">Recent Posts</h1>
        <ul>
          {props.blogs?.map((blog: any) => (
            <li className="my-6" key={blog.id}>
              <Link href={`/blog/${blog.slug}`}>
                <h3 className="font-medium text-lg text-mandarin cursor-pointer">
                  {blog.blogTitle}
                </h3>
              </Link>
              <div className="flex items-center pt-2">
                <TbCalendarEvent className="inline" size={20} />
                <time dateTime="2021-08-01" className="ml-2 text-sm italic">
                  {blog.blogDate}
                </time>
              </div>
              <p className="pt-2 text-base text-gray-600">
                {blog.blogDescription}
              </p>
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <Link href="/blog" className="text-mandarin font-medium">
            View All Posts
            <TbArrowNarrowRight className="inline" size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
