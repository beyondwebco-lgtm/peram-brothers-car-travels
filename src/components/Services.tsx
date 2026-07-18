"use client";

import { motion } from "framer-motion";
import {
  Compass,
  PlaneTakeoff,
  Milestone,
  Navigation,
} from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      title: "Local Rental Packages",
      description: "Flexible hourly packages for local shopping, sightseeing, business meetings, and event travels in Vijayawada & Guntur.",
      icon: Compass,
    },
    {
      title: "Airport Pickup Drops",
      description: "Punctual and hassle-free airport transfers to and from Vijayawada Airport (Gannavaram) with guaranteed on-time pickup.",
      icon: PlaneTakeoff,
    },
    {
      title: "Outstation Round Trips",
      description: "Economical and premium outstation round trips with professional chauffeurs for long-distance family vacations.",
      icon: Milestone,
    },
    {
      title: "On Way Drop Services",
      description: "Dedicated one-way drops to Hyderabad, Guntur, Vijayawada, or any destination. Pay only for the one-way distance.",
      icon: Navigation,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-blue-50/30 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            What We Offer
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Flexible Cab Services Tailored for Every Journey
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="glow-card glass-card relative p-8 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                {/* Icon wrapper */}
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-dark mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary/20 transition-colors" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
