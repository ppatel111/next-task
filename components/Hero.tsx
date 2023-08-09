import { NextPage } from "next";
import ParaComponent from "./ParaComponent";
import Image from "next/image";

interface HeroProps {
  isThirdSection?: boolean;
}

const Hero: NextPage<HeroProps> = ({ isThirdSection }) => {
  return (
    <div className="text-start">
      <h1 className="text-4xl md:text-7xl uppercase font-extrabold pb-8">
        Lorem Ipsum
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ParaComponent
          title="Lorem ipsum"
          description="Consequuntur molestias doloremque excepturi rerum soluta voluptate, perferendis ab distinctio ullam! Expedita pariatur debitis, autem quas culpa minima necessitatibus, modi quis accusantium officia fuga eveniet maxime!"
          icon="/static/images/s4.svg"
        />
        <ParaComponent
          title="Lorem ipsum"
          description="Consequuntur molestias doloremque excepturi rerum soluta voluptate, perferendis ab distinctio ullam! Expedita pariatur debitis, autem quas culpa minima necessitatibus, modi quis accusantium officia fuga eveniet maxime!"
          icon="/static/images/s5.svg"
        />
        {isThirdSection && (
          <div className="flex justify-center md:col-span-1">
            <Image
              src="/static/images/hero-image.png"
              alt="Hero Image"
              width={410}
              height={410}
            />
          </div>
        )}
      </div>
      {isThirdSection && (
        <div className="grid grid-cols-1 md:grid-cols-3 my-10">
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <ParaComponent
            title="Lorem ipsum"
            description="Consequuntur molestias doloremque excepturi rerum soluta voluptate, perferendis ab distinctio ullam! Expedita pariatur debitis, autem quas culpa minima necessitatibus, modi quis accusantium officia fuga eveniet maxime!"
            icon="/static/images/contact.svg"
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
