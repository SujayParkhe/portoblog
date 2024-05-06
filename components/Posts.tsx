import { TbCalendarEvent } from "react-icons/tb";
import Link from "next/link";

const Posts = ({ blogs }: any ) => {
  return (
    <ul>
      {blogs?.data?.map((blog: any) => (
        <li className="my-6" key={blog.id}>
        <Link href={`/blog/${blog.attributes.slug}`}>
          <h3 className="font-medium text-lg text-mandarin cursor-pointer">
            {blog.attributes.blogTitle}
          </h3>
        </Link>
        <div className="flex items-center pt-2">
          <TbCalendarEvent className="inline" size={20} />
          <time dateTime="2021-08-01" className="ml-2 text-sm italic">
            {blog.attributes.publishedAt.split('T')[0]}
          </time>
        </div>
        <p className="pt-2 text-base text-gray-600">
          {blog.attributes.blogDescription}
        </p>
      </li>
      ))}
    </ul>
  );
};

export default Posts;
