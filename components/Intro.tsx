import Image from "next/image";
import SocialLinks from "./SocialLinks";

const Intro = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col sm:flex-row">
        <Image
          src="/avatar.png"
          alt="Sujay Parkhe"
          className="flex-shrink-0 self-center mb-4 sm:mb-0"
          width={150}
          height={150}
          priority
        />
        <div className="sm:ml-4 sm:leading-4">
          <h1 className="text-4xl font-bold tracking-tighter">
            Hi,I&apos;m Sujay.
          </h1>
          <div className="mt-4">
            <p className="text-base font-medium pt-2">
              🚀 Full Stack Developer & DevOps Enthusiast 🛠️
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
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Intro;
