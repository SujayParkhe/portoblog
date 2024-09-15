import Intro from "@/components/Intro";
import RecentPosts from "@/components/RecentPosts";
import services from "@/app/services";

export default async function Home() {
  const blogs = await services.queryBlogs();

  console.log("Blogs", blogs);
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
