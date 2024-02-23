import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import RecentPosts from "@/components/RecentPosts";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Intro />
      <RecentPosts />
    </Container>
  );
}
