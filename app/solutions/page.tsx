import React from "react";
import { Code2, Smartphone, Cloud, Cpu } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Web Development",
      description:
        "Crafting responsive and scalable web applications with modern frameworks.",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Mobile App Solutions",
      description:
        "Designing and developing intuitive mobile applications for iOS and Android.",
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Building robust and secure cloud solutions for enhanced scalability and reliability.",
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "AI/ML Integration",
      description:
        "Implementing intelligent AI and Machine Learning models to optimize operations.",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins tracking-tight">
            Our Specialized Solutions
          </h2>
        </div>

        {/* 解决方案网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-blue-50"
            >
              {/* 图标容器 - 浅蓝色背景圆形 */}
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#007bff] transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              {/* 标题 */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-poppins">
                {item.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-500 leading-relaxed font-poppins text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
