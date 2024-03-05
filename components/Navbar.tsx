"use client";
import { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold tracking-widest">
            SujayParkhe
          </Link>
        </div>
        <div className="sm:hidden">
            {isMobileMenuOpen ? (
              <BiX onClick={toggleMobileMenu} size={32} />
            ): (
              <BiMenuAltLeft onClick={toggleMobileMenu} size={32} />
            )}
        </div>
        <nav className="hidden sm:flex text-base font-medium space-x-6">
          <Link href="/projects" className="hover:text-mandarin focus:underline focus:decoration-mandarin">Projects</Link>
          <Link href="/blog" className="hover:text-mandarin focus:underline focus:decoration-mandarin">Blog</Link>
        </nav>
      </div>
      <MobileNavbar isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <hr className="border-mandarin" aria-hidden="true" />
    </header>
  );
};

export default Navbar;