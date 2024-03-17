import Intro from "@/components/Intro";
import RecentPosts from "@/components/RecentPosts";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <main>
        <Intro />
        <hr className="border-mandarin" aria-hidden="true" />
        <RecentPosts />
      </main>
    </>
  );
}
