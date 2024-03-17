import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { TbCopyright } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <hr className="border-mandarin" aria-hidden="true" />
      <footer>
        <div className="flex justify-between items-center pt-10">
          <div className="flex items-center">
            <TbCopyright size={22} />
            <Link href="/" className="cursor-pointer ml-2 hover:text-mandarin">
              Sujay Parkhe
            </Link>
          </div>
          <div className="flex space-x-2">
            <SocialLinks />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
