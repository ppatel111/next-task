import { NextPage } from "next";
import ParaComponent from "./ParaComponent";
import Image from "next/image";

interface ParagraphWithImageProps {
  reverse?: boolean;
  src:string
}

const ParagraphWithImage: NextPage<ParagraphWithImageProps> = ({ reverse, src }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="hidden md:block"></div>
      <div className="flex items-center justify-center">
        {reverse ? (
          <Image
            src={src}
            alt="Hero Image"
            width={410}
            height={410}
          />
        ) : (
          <ParaComponent
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias doloremque excepturi rerum soluta voluptate, perferendis ab distinctio ullam! Expedita pariatur debitis, autem quas culpa minima necessitatibus, modi quis accusantium officia fuga eveniet maxime!"
            icon="/static/images/s3.svg"
          />
        )}
      </div>
      <div className="flex items-center justify-center">
        {!reverse ? (
          <Image
            src={src}
            alt="Hero Image"
            width={410}
            height={410}
          />
        ) : (
          <ParaComponent
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias doloremque excepturi rerum soluta voluptate, perferendis ab distinctio ullam! Expedita pariatur debitis, autem quas culpa minima necessitatibus, modi quis accusantium officia fuga eveniet maxime!"
            icon="/static/images/s3.svg"
          />
        )}
      </div>
    </div>
  );
};

export default ParagraphWithImage;
