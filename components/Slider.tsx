import { NextPage } from "next";
import { useEffect } from "react";

const BrandSlider: NextPage = () => {
  useEffect(() => {
    const slider = document.querySelector(".logo-carousel") as HTMLDivElement;
    const slides = slider.querySelectorAll(".slide");
    const slideWidth = slides[0].clientWidth;
    const slideMargin = 20;
    let currentIndex = 0;

    function nextSlide() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateSliderPosition();
    }

    function updateSliderPosition() {
      const offset = -(slideWidth + slideMargin) * currentIndex;
      slider.style.transform = `translateX(${offset}px)`;
    }

    const autoplayInterval = setInterval(nextSlide, 1000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

  return (
    <div className="row overflow-hidden">
      <div className=" slider-background">
        <section className="logo-carousel">
          <div className="slide">
            <p>lorem ipsum</p>
          </div>
          <div className="slide">
            <p>lorem ipsum</p>
          </div>
          <div className="slide">
            <p>lorem ipsum</p>
          </div>
          <div className="slide ">
            <p>lorem ipsum</p>
          </div>
          <div className="slide">
            <p>lorem ipsum</p>
          </div>
          <div className="slide">
            <p>lorem ipsum</p>
          </div>
          <div className="slide ">
            <p>lorem ipsum</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandSlider;
