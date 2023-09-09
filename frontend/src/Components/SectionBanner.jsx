import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { SlidesData } from "./SlidesData";

const SectionBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SlidesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === SlidesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="max-w-full h-[500px] w-full m-auto pb-8 relative group">
        <div
          style={{ backgroundImage: `url(${SlidesData[currentIndex].url})` }}
          className="hidden sm:block w-full h-full  bg-center bg-cover duration-500 "
        ></div>

        {/* Left Arrow */}
        <div className="hidden sm:block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden sm:block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex items-center justify-center bg-gray-800 sm:backdrop-opacity-30 sm:backdrop-invert sm:bg-black/40 sm:mx-8 w-full h-full sm:w-1/3 sm:h-2/3 md:w-1/2 md:h-1/2 absolute sm:top-[50%] sm:left-[25%] transform sm:-translate-x-1/2 sm:-translate-y-1/2 p-4 sm:rounded-lg text-white text-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, libero ut consectetur dapibus, nunc ligula auctor ipsum.
              orem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod,
            </p>
          </div>
        </div>

        <div className=" flex top-4 justify-center py-2 ">
          {SlidesData.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="hidden sm:block text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
