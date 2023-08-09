import { NextPage } from 'next';
import Image from 'next/image';

interface ParaComponentProps {
  title: string;
  description: string;
  icon: string;
}

const ParaComponent: NextPage<ParaComponentProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-2xl md:text-3xl uppercase font-bold mb-2">{title}</h3>
      <p className="text-start mb-4 md:mb-8">{description}</p>
      <div className="flex justify-center">
        <Image src={icon} width={24} height={24} alt="Icon" />
      </div>
    </div>
  );
};

export default ParaComponent;