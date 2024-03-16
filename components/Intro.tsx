import Image from "next/image";
import Link from "next/link";
import {
  TbBrandBehance,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandGmail,
} from "react-icons/tb";

const Intro = () => {
  return (
    <div className="my-16">
      <div className="flex">
        <Image
          src="/avatar.png"
          className="w-40 h-40"
          alt="Sujay Parkhe"
          width={150}
          height={150}
          priority
        />
        <div className="ml-4 leading-4">
          <h1 className="text-4xl font-bold tracking-tighter">
            Hi,I&apos;m Sujay.
          </h1>
          <div className="mt-4">
            <p className="text-base font-medium pt-2">
              🚀 Frontend Engineer & DevOps Enthusiast 🛠️
            </p>
            <p className="text-base font-medium pt-2">
              Crafting seamless experiences & optimizing workflows.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-8">
        <h2 className="text-lg font-medium">Social Links: </h2>
        <div className="flex space-x-2 ml-2 cursor-pointer">
          <TbBrandGithub size={24} />
          <TbBrandLinkedin size={24} />
          <TbBrandBehance size={24} />
          <TbBrandGmail size={24} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
