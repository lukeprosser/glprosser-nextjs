'use client';
import { useCallback, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { services as images } from '@/lib/constants';
import Logo from '../logo/Logo';

// Inspired by https://www.youtube.com/watch?v=tXlZCW26bto
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full m-auto">
      <div
        style={{
          backgroundImage: `url('/images/services/${images[currentIndex]}.jpg')`,
        }}
        className="w-full h-full bg-center bg-cover duration-[2000ms]"
      >
        <div className="w-full h-full relative group backdrop-brightness-[0.6] backdrop-blur-[3px]">
          <div className="w-full h-full flex items-center justify-center">
            <Logo />
          </div>
          <button
            className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={previousSlide}
          >
            <BsChevronCompactLeft size={30} />
          </button>
          <button
            className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <BsChevronCompactRight size={30} />
          </button>
          <div className="absolute w-full bottom-0 flex justify-center">
            {images.map((image, index) => (
              <button
                key={image}
                className={`m-2 p-1 text-3xl cursor-pointer border-2 rounded-full ${
                  index === currentIndex
                    ? 'bg-stone-300 border-black/80'
                    : 'bg-black/40 border-black/10'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
