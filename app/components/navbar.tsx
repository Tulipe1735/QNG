"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Welcome", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
    { name: "Our Team", href: "/team" },
  ];

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#007bff] p-1.5 rounded-lg text-white">
              <Settings
                size={24}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            </div>
            <span className="text-[#007bff] text-2xl font-bold tracking-tight font-poppins">
              Quality Engine
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-[18px] font-poppins font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#007bff]"
                      : "text-gray-600 hover:text-[#007bff]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#007bff] text-white px-8 py-3 rounded-xl font-semibold shadow-[0_10px_20px_-5px_rgba(0,123,255,0.4)] hover:bg-[#0069d9] hover:shadow-lg transition-all active:scale-95 font-poppins"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium font-poppins py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-[#007bff]"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
