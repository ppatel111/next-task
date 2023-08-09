"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ParaComponent from '@/components/ParaComponent';
import ParagraphWithImage from '@/components/ParagraphWithImage';
import About from './about/page';
import Accordion from '@/components/Accordian';
import Image from 'next/image';
import BrandSlider from '@/components/Slider';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-20 px-4">
        <Hero isThirdSection={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          <ParaComponent
            title="Lorem ipsom"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias doloremque excepturi rerum soluta voluptate, perferendis ab distinctio ullam! Expedita pariatur debitis, autem quas culpa minima necessitatibus, modi quis accusantium officia fuga eveniet maxime!"
            icon="/static/images/contact.svg"
          />
          <ParaComponent
            title="Lorem ipsom"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias doloremque excepturi rerum soluta voluptate, perferendis ab distinctio ullam! Expedita pariatur debitis, autem quas culpa minima necessitatibus, modi quis accusantium officia fuga eveniet maxime!"
            icon="/static/images/s1.svg"
          />
          <div className="hidden lg:block"></div>
        </div>
        <ParagraphWithImage src="/static/images/hero-image.png" />
      </div>
      <About />
      <BrandSlider />
      <div className="container mx-auto my-20 px-4">
        <Hero isThirdSection={false} />
        <div className="my-10">
          <ParagraphWithImage reverse={true}  src="/static/images/man-image.png" />
        </div>
        <Accordion />
      
      </div>
    </div>
  );
}