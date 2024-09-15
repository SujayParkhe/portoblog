import { TbCalendarEvent } from "react-icons/tb";
import Link from "next/link";

type BlogProps = {
  blogs: Blog[];
};

const Posts = (props: BlogProps) => {
  return (
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
          <p className="pt-2 text-base text-gray-600">{blog.blogDescription}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
