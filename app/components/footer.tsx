"use client";

import React from "react";
// 导入所需的图标
import { FaXTwitter, FaYoutube } from "react-icons/fa6"; // 使用 Font Awesome 6
import { SiBilibili } from "react-icons/si"; // 使用 Simple Icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "X",
      href: "#", // 替换为你的 X 主页链接
      icon: <FaXTwitter size={20} />, // 使用 FaXTwitter
      label: "Visit our X profile",
    },
    {
      name: "YouTube",
      href: "#", // 替换为你的 YouTube 频道链接
      icon: <FaYoutube size={20} />, // 使用 FaYoutube
      label: "Visit our YouTube channel",
    },
    {
      name: "Bilibili",
      href: "#", // 替换为你的 Bilibili 主页链接
      icon: <SiBilibili size={20} />, // 使用 SiBilibili
      label: "Visit our Bilibili space",
    },
  ];

  return (
    <footer className="w-full bg-[#2D3E50] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 左侧：版权信息 */}
          <div className="text-gray-300 font-poppins text-sm md:text-base">
            © {currentYear} Quality Engine All rights reserved.
          </div>

          {/* 右侧：社交媒体图标 */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank" // 在新标签页中打开
                rel="noopener noreferrer" // 安全性增强
                className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center justify-center"
                aria-label={link.label} // 无障碍支持
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
