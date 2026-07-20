"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Car } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-xs py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="p-2 bg-primary rounded-xl text-white group-hover:scale-105 transition-transform duration-300">
                <Car className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-bold tracking-tight transition-colors duration-300 flex items-center ${
                  scrolled ? "text-dark" : "text-white"
                }`}>
                  PERAM BROTHERS
                </span>
                <span className={`text-[10px] font-medium tracking-widest -mt-1 transition-colors duration-300 ${
                  scrolled ? "text-gray-500" : "text-white/70"
                }`}>
                  CAR TRAVELS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:7095281999"
                className={`flex items-center space-x-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  scrolled
                    ? "text-dark border-gray-200 hover:border-primary/50 hover:text-primary"
                    : "text-white border-white/20 hover:border-white hover:bg-white/10"
                }`}
              >
                <Phone className={`w-4 h-4 transition-colors duration-200 ${
                  scrolled ? "text-primary" : "text-white"
                }`} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917095281999?text=Hello%20Peram%20Brothers%20Car%20Travels,%20I'd%20like%20to%20inquire%20about%20booking%20a%20cab."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden space-x-3">
              <a
                href="tel:7095281999"
                className={`p-2 rounded-full transition-all duration-200 ${
                  scrolled
                    ? "bg-blue-50 text-primary hover:bg-primary hover:text-white"
                    : "bg-white/10 text-white hover:bg-white/25"
                }`}
                aria-label="Call Owner"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-gray-600 hover:text-dark hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white border-b border-gray-100 shadow-lg md:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <a
                  href="tel:7095281999"
                  className="flex items-center justify-center space-x-2 text-sm font-semibold text-dark border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/917095281999?text=Hello%20Peram%20Brothers%20Car%20Travels,%20I'd%20like%20to%20inquire%20about%20booking%20a%20cab."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-sm font-semibold bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-500 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
