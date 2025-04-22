import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@shared/data";

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = services.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="carousel h-96 md:h-[500px] relative bg-gray-800 overflow-x-hidden">
      <div 
        className="carousel-container h-full relative"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, display: "flex", transition: "transform 0.5s ease-in-out", width: "100%" }}
      >
        {services.map((service, index) => (
          <div key={index} className="carousel-slide relative w-full h-full flex-shrink-0">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-10">
                <div className="max-w-lg bg-white bg-opacity-90 p-6 md:p-8 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-darker mb-3">{service.title}</h2>
                  <p className="text-neutral-darker mb-4">{service.description}</p>
                  <Button className="bg-secondary hover:bg-secondary-light text-white">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full w-10 h-10 p-0"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full w-10 h-10 p-0"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-secondary' : 'bg-white bg-opacity-50'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ServiceCarousel;
