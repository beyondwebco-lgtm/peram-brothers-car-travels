"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax scroll hooks
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.5 },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.8 },
    },
  };


  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* 1. Cinematic Background Video */}
      <motion.div
        style={{ y: videoY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/innova-crysta.webp"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video is not supported */}
          <img
            src="/innova-crysta.webp"
            alt="Peram Brothers travels cab service"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* 2. Premium Overlays (Dark gradient, Vignette, Ambient blue glow) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85 z-10 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
      
      {/* Ambient Mouse-interactive Blue Glow */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none z-10"
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      {/* 3. Main Center Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center mt-12 sm:mt-6">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Centered Large Headline - Reveals line-by-line */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={lineVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
            >
              PERAM BROTHER'S
            </motion.h1>
            <motion.h1
              variants={lineVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent"
            >
              Car Travels
            </motion.h1>
          </div>

          {/* Route & Price Offer Card */}
          <motion.div
            variants={lineVariants}
            className="w-full max-w-lg mx-auto mb-8 mt-2 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col items-center justify-center text-center space-y-3"
          >
            {/* Vijayawada ↔ Hyderabad Route */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2 flex-wrap">
              <span>Vijayawada</span>
              <span className="text-primary font-normal px-1">↔</span>
              <span>Hyderabad</span>
            </div>

            {/* Prices Starting From Just ₹5,999 */}
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-300 flex items-center justify-center flex-wrap gap-2">
              <span>Prices Starting From Just</span>
              <span className="bg-primary text-white font-extrabold text-sm sm:text-base px-3 py-1 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] tracking-normal normal-case">
                ₹5,999
              </span>
            </div>
          </motion.div>

          {/* Centered Subtext */}
          <motion.p
            variants={subheadingVariants}
            className="text-base sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mb-10 text-center px-2"
          >
            24×7 Local & Outstation Taxi Services Available in VIJAYAWADA & GUNTUR
          </motion.p>

          {/* Booking Action CTAs */}
          <motion.div
            variants={ctaVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md sm:max-w-none"
          >
            <a
              href="https://wa.me/917095281999?text=Hello%20Peram%20Brothers%20Car%20Travels,%20I'd%20like%20to%20book%20a%20cab.%20Please%20provide%20availability%20and%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href="tel:7095281999"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 hover:bg-white text-white hover:text-dark border border-white/30 hover:border-white font-bold text-base px-8 py-4 rounded-full shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-xs"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator with loop animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-300 transition-colors cursor-pointer"
          onClick={() => {
            const section = document.getElementById("services");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Explore Services</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
