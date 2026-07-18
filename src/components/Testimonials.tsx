"use client";

import { Star, MessageSquare } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  city: string;
  rating: number;
  review: string;
  image: string;
  tripDetail: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Rahul Reddy",
      city: "Hyderabad",
      rating: 5,
      review: "Excellent service! The driver was punctual, the car was spotless, and the entire journey was smooth. Will definitely book again for family trips.",
      image: "/images/testimonials/rahulreddy.jpg",
      tripDetail: "Hyderabad → Vijayawada • Toyota Innova Crysta",
    },
    {
      name: "Sneha Chowdary",
      city: "Vijayawada",
      rating: 5,
      review: "Booked through WhatsApp and got an instant confirmation. The driver arrived on time and the ride was very comfortable. Highly recommended.",
      image: "/images/testimonials/snehachowdary.jpg",
      tripDetail: "Vijayawada → Hyderabad Airport • Kia Carens",
    },
    {
      name: "Mahesh Kumar",
      city: "Guntur",
      rating: 5,
      review: "Very professional service with transparent pricing. The AC worked perfectly and the driver drove safely throughout the trip.",
      image: "/images/testimonials/maheshkumar.jpg",
      tripDetail: "Guntur → Hyderabad • Maruti Dzire",
    },
    {
      name: "Priyanka Reddy",
      city: "Hyderabad",
      rating: 5,
      review: "Our flight was delayed, but the driver patiently waited and greeted us at the airport. Great customer service and hassle-free experience.",
      image: "/images/testimonials/priyankareddy.jpg",
      tripDetail: "Airport Pickup • Toyota Etios",
    },
    {
      name: "Srinivas Rao",
      city: "Tenali",
      rating: 5,
      review: "We travelled with our family and had plenty of luggage space. The vehicle was clean, comfortable, and the journey was enjoyable.",
      image: "/images/testimonials/srinivasrao.jpg",
      tripDetail: "Tenali → Hyderabad • Toyota Innova",
    },
    {
      name: "Anusha Devi",
      city: "Mangalagiri",
      rating: 5,
      review: "Used the cab for a full-day local trip. The driver was courteous, the car was well maintained, and the pricing was exactly as promised.",
      image: "/images/testimonials/anushadevi.jpg",
      tripDetail: "Local Rental • Maruti Ertiga",
    },
  ];

  // Duplicate the array to allow for a seamless infinite scroll loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-blue-50/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-indigo-50/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Client Reviews
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Loved by Thousands of Happy Travelers
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="w-full relative overflow-hidden py-4 select-none">
        {/* Left & Right gradient fade overlays to look premium */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="marquee-track flex gap-6 px-3">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[340px] sm:w-[400px] shrink-0 glow-card glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs border border-gray-100 hover:border-blue-100/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3.5">
                    {/* Profile avatar */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Name details */}
                    <div>
                      <span className="text-sm font-bold text-dark block group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                        {item.city} Customer
                      </span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-0.5 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current animate-pulse" style={{ animationDelay: `${i * 0.15}s`, animationDuration: "2.5s" }} />
                    ))}
                  </div>
                </div>

                {/* Review Message */}
                <p className="text-sm text-gray-600 italic font-medium leading-relaxed mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Footer Trip Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                  {item.tripDetail}
                </span>
                <MessageSquare className="w-4 h-4 text-gray-300 group-hover:text-primary/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
