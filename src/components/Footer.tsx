"use client";

import { Car, Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-xl text-white">
                <Car className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white">
                  PERAM BROTHER'S
                </span>
                <span className="text-[9px] text-gray-400 font-medium tracking-widest -mt-1">
                  CAR TRAVELS
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Providing premium, transparent, and verified cab rental solutions in Vijayawada, Guntur, and across Andhra Pradesh. Your comfort is our duty.
            </p>
          </div>

          {/* Quick Links column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact numbers column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              Helpdesk & Support
            </h4>
            <div className="space-y-3">
              <a
                href="tel:7095281999"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-all group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 group-hover:text-white" />
                </div>
                <span className="font-bold">+91 70952 81999</span>
              </a>
              <a
                href="tel:7036281999"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-all group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 group-hover:text-white" />
                </div>
                <span className="font-bold">+91 70362 81999</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom border & details */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} Peram Brother's Car Travels. All rights reserved. Managed by Peram Venkata Nagaraju.
          </p>

          <button
            onClick={handleBackToTop}
            className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 py-2.5 px-4 rounded-xl"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
