"use client";

import { motion } from "framer-motion";
import { Search, PhoneCall, Gift, Check } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Trip",
      description: "Select your route (Local, Airport Transfer, or Intercity Outstation) and choose your preferred white vehicle type.",
      icon: Search,
    },
    {
      num: "02",
      title: "Call or WhatsApp",
      description: "Click to call or chat with us. Share your pickup address, time, and travel details. Get instant fair confirmations.",
      icon: PhoneCall,
    },
    {
      num: "03",
      title: "Enjoy Your Journey",
      description: "Our professional driver arrives on time in a pristine sanitized cab. Sit back, relax, and experience the premium ride.",
      icon: Gift,
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Easy Booking
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            How It Works — Simple 3-Step Rides
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Steps flow container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background Connecting Line (hidden on mobile, visible on desktop) */}
          <div className="absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble Icon */}
                  <div className="relative mb-8">
                    {/* Circle Indicator */}
                    <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Step Number Tag */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      {step.num}
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {step.title}
                  </h3>

                  {/* Subtext */}
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
