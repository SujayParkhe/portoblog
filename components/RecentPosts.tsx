import Link from "next/link";
import Posts from "./Posts";
import { TbArrowNarrowRight } from "react-icons/tb";

const RecentPosts = ({ blogs }: any ) => {
  return (
    <>
      <div className="py-14">
        <h1 className="text-2xl font-semibold">Recent Posts</h1>
        <Posts blogs={blogs} />
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
