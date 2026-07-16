"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, MessageCircle, MapPin, Landmark, Star } from "lucide-react";

interface VehiclePrice {
  name: string;
  type: string;
  price: string;
  badge?: string;
}

export default function FeaturedRoutes() {
  const [activeTab, setActiveTab] = useState<"vijayawada" | "guntur">("vijayawada");

  const prices: VehiclePrice[] = [
    { name: "New Dzire", type: "Economy Sedan (4+1)", price: "₹5,999", badge: "Most Popular" },
    { name: "Toyota Etios", type: "Comfort Sedan (4+1)", price: "₹6,499" },
    { name: "New Ertiga", type: "Family MPV (6+1)", price: "₹7,999", badge: "Best Value" },
    { name: "Kia Carens", type: "Premium MPV (6+1)", price: "₹8,999" },
    { name: "Toyota Innova", type: "Classic MPV (7+1)", price: "₹8,999" },
    { name: "Toyota Innova Crysta", type: "Luxury MPV (7+1)", price: "₹9,999", badge: "VIP Choice" },
  ];

  const getWhatsAppLink = (route: string, vehicle: string, price: string) => {
    const text = `Hello Peram Brothers Car Travels, I am interested in booking the ${vehicle} for the ${route} trip (Starting Price: ${price}). Please check availability and confirm details.`;
    return `https://wa.me/917036281999?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="routes" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full bg-blue-50/40 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] rounded-full bg-indigo-50/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Popular Highways
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Featured Intercity One-Way Routes
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
            Enjoy fixed, transparent, all-inclusive pricing between major economic hubs with no hidden charges.
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Route Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl">
            <button
              onClick={() => setActiveTab("vijayawada")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "vijayawada"
                  ? "bg-white text-primary shadow-xs"
                  : "text-gray-500 hover:text-dark"
              }`}
            >
              Vijayawada ⇄ Hyderabad
            </button>
            <button
              onClick={() => setActiveTab("guntur")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === "guntur"
                  ? "bg-white text-primary shadow-xs"
                  : "text-gray-500 hover:text-dark"
              }`}
            >
              Guntur ⇄ Hyderabad
            </button>
          </div>
        </div>

        {/* SVG Route Line Map Animation */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 mb-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Source */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Origin</span>
                <span className="text-xl font-extrabold text-dark">
                  {activeTab === "vijayawada" ? "Vijayawada, AP" : "Guntur, AP"}
                </span>
              </div>
            </div>

            {/* Path Drawing */}
            <div className="flex-1 w-full md:w-auto flex flex-col items-center py-4 md:py-0 px-4">
              <span className="text-xs font-semibold text-primary/80 mb-2 flex items-center gap-1.5 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100/50">
                <ArrowLeftRight className="w-3.5 h-3.5" /> Direct Express Highway
              </span>
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden flex items-center">
                {/* Simulated moving light road dash */}
                <div className="absolute inset-0 bg-blue-200/50 animate-pulse" />
                <motion.div
                  initial={{ left: "-10%" }}
                  animate={{ left: "110%" }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute w-20 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>
              <span className="text-xs text-gray-400 mt-2 font-medium">Distance ~275 KM | Duration ~5 hrs</span>
            </div>

            {/* Destination */}
            <div className="flex items-center space-x-4">
              <div className="text-center md:text-right">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Destination</span>
                <span className="text-xl font-extrabold text-dark">Hyderabad, TS</span>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                <Landmark className="w-6 h-6" />
              </div>
            </div>

          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prices.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative bg-white rounded-3xl border ${
                vehicle.badge ? "border-blue-200 shadow-md ring-1 ring-blue-50" : "border-gray-100 shadow-xs"
              } p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Optional Badge */}
              {vehicle.badge && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 fill-current" /> {vehicle.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
                    {vehicle.name}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-gray-400 block mb-6">{vehicle.type}</span>

                <div className="flex items-baseline mb-6">
                  <span className="text-2xl font-black text-primary">{vehicle.price}</span>
                  <span className="text-xs text-gray-400 font-medium ml-1.5">Starting Fare</span>
                </div>
              </div>

              <a
                href={getWhatsAppLink(
                  activeTab === "vijayawada" ? "Vijayawada to Hyderabad" : "Guntur to Hyderabad",
                  vehicle.name,
                  vehicle.price
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl flex items-center justify-center space-x-2 bg-gray-50 group-hover:bg-primary text-gray-700 group-hover:text-white font-bold text-sm transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp</span>
              </a>
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
