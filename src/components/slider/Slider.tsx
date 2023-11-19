'use client';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { services as images } from '@/lib/constants';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-[700px] w-full m-auto">
      <div
        style={{
          backgroundImage: `url('/images/services/${images[currentIndex]}.jpg')`,
        }}
        className="relative group w-full h-full bg-center bg-cover duration-500"
      >
        <button
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={previousSlide}
        >
          <BsChevronCompactLeft size={30} />
        </button>
        <button
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </button>
        <div className="absolute w-full bottom-0 flex justify-center">
          {images.map((image, index) => (
            <button
              key={image}
              className="text-2xl text-white cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <RxDotFilled />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
