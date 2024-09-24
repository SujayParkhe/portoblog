"use client";
import Link from "next/link";
import {
  TbLink,
  TbBrandFacebook,
  TbBrandX,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { toast } from "react-toastify";
interface SharePostProps {
  url: string;
  title: string;
}

const SharePost = (props: SharePostProps) => {
  const { url, title } = props;

  const shareLinks = {
    whatsapp: `https://web.whatsapp.com/send?text=${title}: ${url}`,
    facebook: `https://www.facebook.com/sharer/share...${url}&quote=${title}: ${url}`,
    x: `https://x.com/intent/tweet?text=${title}: ${url}`,
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex space-x-2">
      <span>
        <TbLink
          onClick={copyUrl}
          className="hover:text-mandarin cursor-pointer"
          size={24}
        />
      </span>
      <Link href={shareLinks.whatsapp} target="_blank">
        <TbBrandWhatsapp className="hover:text-mandarin" size={24} />
      </Link>
      <Link href={shareLinks.facebook} target="_blank">
        <TbBrandFacebook className="hover:text-mandarin" size={24} />
      </Link>
      <Link href={shareLinks.x} target="_blank">
        <TbBrandX className="hover:text-mandarin" size={24} />
      </Link>
    </div>
  );
};

export default SharePost;
