import React from "react";
import Image from "next/image";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Enterprise Dashboard",
      category: "SaaS Platform",
      image: "/joan-gamell-XU1L22IUKnc-unsplash.jpg",
    },
    {
      title: "Mobile Banking App",
      category: "Fintech",
      image: "/nathan-dumlao-lvWw_G8tKsk-unsplash.jpg",
    },
    {
      title: "Cloud Migration",
      category: "DevOps",
      image: "/sammyayot254-vIQDv6tUHYk-unsplash.jpg",
    },
    {
      title: "Project Management Tool",
      category: "Productivity",
      image: "/daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins tracking-tight">
            Explore Our Recent Projects
          </h2>
        </div>

        {/* 项目网格 - 调整为 3 列或 4 列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="relative h-52 w-full bg-slate-200 overflow-hidden">
                {
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                }
              </div>

              {/* 内容区域 */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">
                  {project.title}
                </h3>

                {/* 分类标签 */}
                <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full font-poppins tracking-wide">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
