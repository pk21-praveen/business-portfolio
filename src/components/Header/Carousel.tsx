
'use client'

import React, { useEffect, useState } from 'react';

type CarouselSlide = {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

const slides: CarouselSlide[] = [
  {
    image: '/img/carousel-1.jpg',
    title: 'Best Carpenter & Craftsman Services',
    subtitle: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita.',
    buttonText: 'Read More',
    buttonLink: '#',
    secondaryButtonText: 'Free Quote',
    secondaryButtonLink: '#',
  },
  {
    image: '/img/carousel-2.jpg',
    title: 'Best Carpenter & Craftsman Services',
    subtitle: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita.',
    buttonText: 'Read More',
    buttonLink: '#',
    secondaryButtonText: 'Free Quote',
    secondaryButtonLink: '#',
  },
  {
    image: '/img/carousel-3.jpg',
    title: 'Best Carpenter & Craftsman Services',
    subtitle: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita.',
    buttonText: 'Read More',
    buttonLink: '#',
    secondaryButtonText: 'Free Quote',
    secondaryButtonLink: '#',
  },
];

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const setSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg lg:text-xl mb-6">{slide.subtitle}</p>
            <div className="flex space-x-4">
              <a href={slide.buttonLink} className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition duration-300">
                {slide.buttonText}
              </a>
              {slide.secondaryButtonText && slide.secondaryButtonLink && (
                <a
                  href={slide.secondaryButtonLink}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
                >
                  {slide.secondaryButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-white'}`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};