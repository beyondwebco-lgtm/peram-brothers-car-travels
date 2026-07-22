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
  price: string;
  featured?: boolean;
}

export default function Fleet() {
  const vehicles: Vehicle[] = [
    {
      name: "NEW DZIRE (4+1 AC)",
      category: "Compact Sedan",
      image: "/dzire.png",
      capacity: "4+1 Seats",
      ac: "AC Available",
      luggage: "2 Bags",
      comfort: 4.5,
      price: "₹5,999",
    },
    {
      name: "TOYOTA ETIOS (4+1 AC)",
      category: "Comfort Sedan",
      image: "/etios.jpg",
      capacity: "4+1 Seats",
      ac: "AC Available",
      luggage: "3 Bags",
      comfort: 4.6,
      price: "₹6,499",
    },
    {
      name: "NEW ERTIGA (6+1 AC)",
      category: "Comfort Family MPV",
      image: "/ertiga.png",
      capacity: "6+1 Seats",
      ac: "Dual AC",
      luggage: "3 Bags",
      comfort: 4.7,
      price: "₹7,999",
      featured: true,
    },
    {
      name: "KIA CARENS (6+1 AC)",
      category: "Premium Family MPV",
      image: "/kia-carens.jpg",
      capacity: "6+1 Seats",
      ac: "Automatic AC",
      luggage: "4 Bags",
      comfort: 4.8,
      price: "₹8,999",
    },
    {
      name: "TOYOTA INNOVA (7+1 AC)",
      category: "Executive Touring Vehicle",
      image: "/toyota-innova.jpg",
      capacity: "7+1 Seats",
      ac: "Dual AC",
      luggage: "5 Bags",
      comfort: 4.8,
      price: "₹8,999",
    },
    {
      name: "TOYOTA CRYSTA (7+1 AC)",
      category: "Premium Luxury MPV",
      image: "/innova-crysta.webp",
      capacity: "7+1 Seats",
      ac: "Climate Control",
      luggage: "6 Bags",
      comfort: 4.9,
      price: "₹9,999",
      featured: true,
    },
  ];

  const getWhatsAppLink = (vehicleName: string, price: string) => {
    const text = `Hello Peram Brother's Car Travels, I am interested in booking the ${vehicleName} for the Vijayawada 🔁 Hyderabad route (Starting Fare: ${price}). Please check availability and confirm the travel details.`;
    return `https://wa.me/917095281999?text=${encodeURIComponent(text)}`;
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
                  {/* Vehicle Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-dark mb-2.5">{vehicle.name}</h3>

                  {/* Route & Rating Row */}
                  <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                    {/* Route Info Badge */}
                    <div className="flex items-center bg-blue-50/70 border border-blue-100/50 px-3 py-1.5 rounded-xl text-primary text-lg sm:text-xl font-bold w-fit">
                      <span>VIJAYAWADA 🔁 HYDERABAD</span>
                    </div>

                    {/* Comfort Rating */}
                    <div className="flex items-center space-x-1 text-amber-500 bg-amber-50/50 border border-amber-100/50 px-2.5 py-1 rounded-lg shrink-0">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold">{vehicle.comfort}</span>
                    </div>
                  </div>

                  {/* Starting Fare Row */}
                  <div className="flex items-baseline justify-center space-x-1.5 mb-4">
                    <span className="text-xl font-black text-primary">{vehicle.price}</span>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Starting Fare</span>
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
                  href={getWhatsAppLink(vehicle.name, vehicle.price)}
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

        {/* Additional Route Notice */}
        <div className="text-center mt-12">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
            * Prices are inclusive of all Toll Gates, State Taxes, and Driver Allowances.
          </p>
        </div>

      </div>
    </section>
  );
}
