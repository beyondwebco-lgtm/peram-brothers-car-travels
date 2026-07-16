"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users, Briefcase, Snowflake, Star, Award } from "lucide-react";
import Image from "next/image";

interface Vehicle {
  name: string;
  category: string;
  image: string;
  capacity: string;
  ac: string;
  luggage: string;
  comfort: number;
  featured?: boolean;
}

export default function Fleet() {
  const vehicles: Vehicle[] = [
    {
      name: "New Swift Dzire",
      category: "Compact Sedan",
      image: "/dzire.png",
      capacity: "4+1 Seats",
      ac: "AC Available",
      luggage: "2 Bags",
      comfort: 4.5,
    },
    {
      name: "Toyota Etios",
      category: "Comfort Sedan",
      image: "/etios.jpg",
      capacity: "4+1 Seats",
      ac: "AC Available",
      luggage: "3 Bags",
      comfort: 4.6,
    },
    {
      name: "New Ertiga",
      category: "Comfort Family MPV",
      image: "/ertiga.png",
      capacity: "6+1 Seats",
      ac: "Dual AC",
      luggage: "3 Bags",
      comfort: 4.7,
      featured: true,
    },
    {
      name: "Kia Carens",
      category: "Premium Family MPV",
      image: "/kia-carens.jpg",
      capacity: "6+1 Seats",
      ac: "Automatic AC",
      luggage: "4 Bags",
      comfort: 4.8,
    },
    {
      name: "Toyota Innova",
      category: "Executive Touring Vehicle",
      image: "/innova-crysta.webp",
      capacity: "7+1 Seats",
      ac: "Dual AC",
      luggage: "5 Bags",
      comfort: 4.8,
    },
    {
      name: "Toyota Innova Crysta",
      category: "Premium Luxury MPV",
      image: "/innova-crysta.webp",
      capacity: "7+1 Seats",
      ac: "Climate Control",
      luggage: "6 Bags",
      comfort: 4.9,
      featured: true,
    },
  ];

  const getWhatsAppLink = (vehicleName: string) => {
    const text = `Hello Peram Brothers Car Travels, I am looking to book the ${vehicleName}. Please let me know the tariff and availability.`;
    return `https://wa.me/917036281999?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="fleet" className="py-24 bg-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Our Ride Catalog
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Our Fleet of Premium Vehicles
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
            Choose from our clean, sanitized, and perfectly maintained white vehicles driven by professional chauffeurs.
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image with zoom & overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-w-7xl) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gray-100 shadow-xs">
                    {vehicle.category}
                  </span>

                  {/* Featured Badge */}
                  {vehicle.featured && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1">
                      <Award className="w-3 h-3" /> Recommended
                    </span>
                  )}
                </div>

                {/* Specs Box */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-dark">{vehicle.name}</h3>
                    <div className="flex items-center space-x-1 text-amber-500 bg-amber-50/50 border border-amber-100/50 px-2.5 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold">{vehicle.comfort}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t border-b border-gray-100 py-4 mb-6">
                    <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl">
                      <Users className="w-4 h-4 text-primary mb-1" />
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Capacity</span>
                      <span className="text-xs font-bold text-dark mt-0.5">{vehicle.capacity}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl">
                      <Snowflake className="w-4 h-4 text-primary mb-1" />
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Climate</span>
                      <span className="text-xs font-bold text-dark mt-0.5">{vehicle.ac}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl">
                      <Briefcase className="w-4 h-4 text-primary mb-1" />
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Luggage</span>
                      <span className="text-xs font-bold text-dark mt-0.5">{vehicle.luggage}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href={getWhatsAppLink(vehicle.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center space-x-2 font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Request Availability</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
