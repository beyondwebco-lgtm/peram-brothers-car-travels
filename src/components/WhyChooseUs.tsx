"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
  DollarSign,
  Compass,
  Navigation,
  ThumbsUp,
} from "lucide-react";
import CountUp from "react-countup";

interface Benefit {
  title: string;
  description: string;
  icon: any;
}

export default function WhyChooseUs() {
  const benefits: Benefit[] = [
    {
      title: "24×7 Reliable Service",
      description: "Our cabs are ready to deploy at any hour of the day or night. Never be stranded in Vijayawada.",
      icon: Clock,
    },
    {
      title: "Professional Chauffeurs",
      description: "Courteous, verified, and highly experienced drivers who know regional highways inside out.",
      icon: ShieldCheck,
    },
    {
      title: "GPS Enabled Safety",
      description: "Every vehicle is tracked via active GPS to assure safety and allow realtime route oversight.",
      icon: Navigation,
    },
    {
      title: "Sanitized & Hygienic Cabs",
      description: "Deep-cleaned cars, clean seat covers, air fresheners, and sanitizer on board before every ride.",
      icon: Sparkles,
    },
    {
      title: "Guaranteed On-Time Pickups",
      description: "We values your time. Our driver arrives 10 minutes prior to scheduled pickup time.",
      icon: MapPin,
    },
    {
      title: "Transparent & Flat Prices",
      description: "No booking fees, no hidden night charges, no peak surge. Honest rates listed upfront.",
      icon: DollarSign,
    },
    {
      title: "Comfortable Modern Fleet",
      description: "Top-end specifications in all sedans and spacious MPVs to guarantee absolute fatigue-free travel.",
      icon: ThumbsUp,
    },
    {
      title: "Local Routing Expertise",
      description: "Expert routing between Guntur, Vijayawada, Hyderabad, and Andhra cities avoiding peak traffic bottleneck.",
      icon: Compass,
    },
  ];

  const stats = [
    { value: 12000, suffix: "+", label: "Happy Customers" },
    { value: 950000, suffix: "+ KM", label: "Distance Covered" },
    { value: 30, suffix: "+", label: "Verified Drivers" },
    { value: 10, suffix: "+ Years", label: "Travel Experience" },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-blue-50/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Why Peram Brothers
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Setting the Benchmark in Premium Road Travels
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50/50 hover:bg-white rounded-3xl border border-gray-100 hover:border-blue-100/50 p-6 shadow-2xs hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics Counters banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] p-10 sm:p-14 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-baseline justify-center whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl font-black mb-2 tracking-tight">
                  <CountUp
                    end={stat.value}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    separator=","
                  />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold ml-1 text-blue-200">
                    {stat.suffix}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-widest text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
