import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Umarov Shokhrukh",
      role: "CEO & Founder",
      color: "bg-green-100",
      statusColor: "bg-green-500",
      href: "https://github.com/Shox4ux",
      image: "/Shoximage.png",
    },
    {
      name: "汪明翰",
      role: "Co-Founder",
      color: "bg-blue-100",
      statusColor: "bg-green-500",
      href: "https://github.com/Tulipe1735",
      image: "/Rayimage.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50/30 py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Meet Our Dedicated Team
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <Link
              key={index}
              href={member.href}
              target="_blank" // 外部链接在新窗口打开
              rel="noopener noreferrer" // 安全性增强
              className="w-full max-w-[280px] bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
            >
              {/* 头像容器 */}
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div
                  className={`relative w-full h-full rounded-full ${member.color} overflow-hidden flex items-center justify-center border-4 border-white shadow-inner transition-transform duration-300 group-hover:scale-105`}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  ) : (
                    /* 优雅的兜底文字占位 */
                    <span className="text-2xl font-bold text-gray-400">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                {/* 状态圆点 */}
                <div
                  className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-white ${member.statusColor} shadow-sm z-10`}
                ></div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#007bff] transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TeamPage;
