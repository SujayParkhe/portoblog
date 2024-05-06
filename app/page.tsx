import Intro from "@/components/Intro";
import RecentPosts from "@/components/RecentPosts";
import { fetchBlogs } from "./utils/fetchBlogs";

export default async function Home() {
  const blogs = await fetchBlogs();
  return (
    <>
      <main>
        <Intro />
        <hr className="border-mandarin" aria-hidden="true" />
        <RecentPosts blogs={blogs} />
      </main>
    </>
  );
}
