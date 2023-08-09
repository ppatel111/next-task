import { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div>
      <div className="about-section">
        <div className="grid grid-cols-2 gap-32 py-12 w-9/12 mx-auto">
          <div className="flex">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase transition-opacity duration-300">
                About <br /> Us
              </h3>
              <p className="transition-opacity duration-300">Hello</p>
              <p className="transition-opacity duration-300">Hello</p>
            </div>
            <Image
              className="mt-11 -z-50"
              src="/static/images/about-small.png"
              alt="hero image"
              width={100}
              height={110}
            />
          </div>
          <div>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
