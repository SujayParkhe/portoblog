"use client";
import React from "react";
import Link from "next/link";

type MobileNavbarProps = {
  isOpen: boolean;
  toggleMobileMenu: () => void;
};

const MobileNavbar = ({ isOpen, toggleMobileMenu }: MobileNavbarProps) => {
  return (
    <nav
      className={`sm:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? "max-h-48" : "max-h-0"
      }`}
    >
      <div className="flex flex-col items-center text-base font-medium">
        {/* <Link href="/projects" onClick={toggleMobileMenu} className="my-2">
          Projects
        </Link> */}
        <Link href="/blog" onClick={toggleMobileMenu} className="my-2">
          Blog
        </Link>
        <Link href="/contact" onClick={toggleMobileMenu} className="my-2">
          Say Hello!
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
