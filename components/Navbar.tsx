import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <Link href="/" className={`${roboto.className} text-2xl tracking-widest text-gray-400`}>
          SUJAY PARKHE
        </Link>
        <nav className="mt-4 sm:mt-0 sm:ml-auto text-base font-medium space-x-6">
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};


export default Navbar;
