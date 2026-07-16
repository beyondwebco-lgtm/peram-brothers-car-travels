"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, ShieldCheck, Sparkles, MapPin, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const carVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
    },
  };

  const trustBadges = [
    { icon: Clock, text: "24×7 Available" },
    { icon: ShieldCheck, text: "Verified Drivers" },
    { icon: Sparkles, text: "Sanitized Vehicles" },
    { icon: MapPin, text: "On-Time Pickup" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white"
    >
      {/* Background Decorative Glowing Circles */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-[30vw] h-[30vw] max-w-[400px] rounded-full bg-blue-50/50 blur-[90px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "-3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main content column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div
              variants={textVariants}
              className="inline-flex items-center self-center lg:self-start space-x-2 bg-blue-50 border border-blue-100/50 px-4 py-1.5 rounded-full text-primary font-semibold text-xs tracking-wider uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Chauffeur Cab Travels</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6"
            >
              Reliable Cab Services in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vijayawada & Guntur
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={textVariants}
              className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              24×7 Local, Airport & Outstation Taxi Services with Professional
              Drivers and Comfortable Vehicles. Experience premium, safe journeys.
            </motion.p>

            {/* Booking CTAs */}
            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="https://wa.me/917036281999?text=Hello%20Peram%20Brothers%20Car%20Travels,%20I'd%20like%20to%20book%20a%20cab.%20Please%20provide%20availability%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
              </a>
              <a
                href="tel:7036281999"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-primary/30 text-dark font-bold text-base px-8 py-4 rounded-full shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  variants={badgeVariants}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xs transition-all duration-200"
                >
                  <div className="p-2 bg-blue-100/60 rounded-xl text-primary flex items-center justify-center">
                    <badge.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-gray-800 leading-snug">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Car visual column */}
          <motion.div
            variants={carVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] max-w-[500px] lg:max-w-none group">
              {/* Premium Background Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-[2.5rem] blur-2xl group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
              
              {/* Luxury Car Image Frame */}
              <div className="w-full h-full relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl bg-gray-50">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
                  alt="Peram Brothers Premium White Cars"
                  fill
                  sizes="(max-w-7xl) 100vw, 50vw"
                  className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-[2.5s] ease-out"
                  priority
                />
                
                {/* Floating SPEC Badge */}
                <div className="absolute bottom-5 right-5 glass px-4 py-2.5 rounded-2xl flex items-center space-x-2 shadow-sm animate-float">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-dark">VIP Ride Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-1.5 text-gray-400 hover:text-primary transition-colors cursor-pointer"
          onClick={() => {
            const section = document.getElementById("services");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll Down</span>
          <div className="p-1 rounded-full border border-gray-300 flex items-center justify-center">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
