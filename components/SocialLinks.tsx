import Link from "next/link";
import {
  TbBrandBehance,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandGmail,
} from "react-icons/tb";

const SocialLinks = () => {
  return (
    <>
      <Link href="https://github.com/SujayParkhe" target="_blank">
        <TbBrandGithub className="hover:text-mandarin" size={24} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sujay-parkhe-25388a152/"
        target="_blank"
      >
        <TbBrandLinkedin className="hover:text-mandarin" size={24} />
      </Link>
      <Link href="https://www.behance.net/sujayparkhe" target="_blank">
        <TbBrandBehance className="hover:text-mandarin" size={24} />
      </Link>
      <Link href="mailto:sparkhe852@gmail.com" target="_blank">
        <TbBrandGmail className="hover:text-mandarin" size={24} />
      </Link>
    </>
  );
};

export default SocialLinks;
