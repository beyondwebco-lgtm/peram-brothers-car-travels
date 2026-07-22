"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Clock, UserCheck } from "lucide-react";

export default function Contact() {
  const getWhatsAppLink = (number: string) => {
    const text = "Hello Peram Brother's Car Travels, I would like to book a cab. Please share rates and availability.";
    return `https://wa.me/91${number}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-10 w-[40vw] h-[40vw] rounded-full bg-blue-50/40 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Contact Us
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Ready to Travel? Get in Touch Instantly
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            We are available 24/7 for booking confirmations, custom outstation quotes, and queries.
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl border border-gray-100 p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/30 rounded-bl-[4rem] pointer-events-none" />

            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Travel Operator</span>
              <h3 className="text-2xl font-extrabold text-dark mb-6">Peram Brother's Car Travels</h3>

              {/* Owner card */}
              <div className="flex items-center space-x-3.5 bg-gray-50 p-4 rounded-2xl mb-8 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl text-primary flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Managing Owner</span>
                  <span className="text-base font-extrabold text-dark">Peram Venkata Nagaraju</span>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Office Address</h4>
                    <p className="text-sm font-semibold text-dark mt-0.5">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Availability</h4>
                    <p className="text-sm font-semibold text-dark mt-0.5">24×7 Local & Outstation Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service note */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                * Call rates apply according to your service provider. WhatsApp messaging is free. Custom billing templates are available for corporate travels.
              </p>
            </div>
          </div>

          {/* Action Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-md">
            <h3 className="text-xl font-bold text-dark text-center sm:text-left mb-2">Book Your Cab Instantly</h3>
            <p className="text-sm text-gray-500 text-center sm:text-left mb-6">
              Click any option below to make an instant voice call or start a chat with our dispatch operators.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Call Number 1 */}
              <a
                href="tel:7095281999"
                className="glow-card flex items-center space-x-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/30 bg-gray-50/50 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div className="p-3 bg-blue-50 rounded-xl text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Primary Call</span>
                  <span className="text-base font-extrabold text-dark">+91 70952 81999</span>
                </div>
              </a>

              {/* Call Number 2 */}
              <a
                href="tel:7036281999"
                className="glow-card flex items-center space-x-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/30 bg-gray-50/50 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div className="p-3 bg-blue-50 rounded-xl text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Secondary Call</span>
                  <span className="text-base font-extrabold text-dark">+91 70362 81999</span>
                </div>
              </a>

            </div>

            <div className="border-t border-gray-100 pt-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block text-center mb-4">Or Connect on WhatsApp</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp operator 1 */}
                <a
                  href={getWhatsAppLink("7095281999")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-4 px-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Operator 1</span>
                </a>

                {/* WhatsApp operator 2 */}
                <a
                  href={getWhatsAppLink("7036281999")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-4 px-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Operator 2</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
