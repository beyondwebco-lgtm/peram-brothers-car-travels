"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  name: string;
  city: string;
  rating: number;
  review: string;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Kalyan Ram",
      city: "Vijayawada",
      rating: 5,
      review: "Excellent service! We booked Innova Crysta for a family trip to Hyderabad. The car was spotless, driver was extremely polite, and we reached exactly on time. Best car travels in Vijayawada.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Ravi Shankar",
      city: "Guntur",
      rating: 5,
      review: "I regularly book their Swift Dzire for airport drops. Extremely reliable pickups and professional drivers who know all regional bypass highways. Hands down best one-way taxi fares.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Srinivas Rao",
      city: "Vijayawada",
      rating: 5,
      review: "Peram Brothers provided corporate luxury cabs for our national delegates. Smooth bookings, clean digital bills, and active GPS tracking. The service was top notch and professional.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Anjali Verma",
      city: "Hyderabad",
      rating: 5,
      review: "Booked a round trip to Vijayawada. Clean Ertiga with dual AC, very comfortable seats. The owner Mr. Nagaraju coordinated everything seamlessly. Will definitely book again.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => clearInterval(intervalId);
  }, [emblaApi, isHovered]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Client Reviews
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            What Our Customers Say About Us
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Slider */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-12 relative flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xs">
                    
                    {/* Floating Quote Icon */}
                    <div className="absolute top-6 right-8 text-primary/10">
                      <MessageSquare className="w-12 h-12 fill-current" />
                    </div>

                    {/* Image */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    {/* Review text */}
                    <div>
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4 justify-center md:justify-start">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                        ))}
                      </div>

                      {/* Comment */}
                      <p className="text-base sm:text-lg text-gray-600 italic font-medium leading-relaxed mb-6 text-center md:text-left">
                        "{item.review}"
                      </p>

                      {/* Author */}
                      <div className="text-center md:text-left">
                        <span className="text-base font-bold text-dark block">{item.name}</span>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.city} Customer</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Nav Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-200 z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-200 z-20"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
