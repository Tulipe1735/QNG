import Image from "next/image";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* 背景图片容器 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
          alt="Quality Engine Background"
          fill
          className="object-cover"
          priority
        />
        {/* 深色遮罩层：从左到右的深色渐变，增强文字可读性 */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-brightness-75"></div>
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[85vh] flex flex-col justify-center items-center text-center">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-poppins tracking-tight">
            Quality Engine
          </h1>
          <Settings className="text-cyan-400 w-12 h-12 md:w-16 md:h-16 animate-[spin_10s_linear_infinite]" />
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-poppins font-light leading-relaxed mb-10">
          Driving unparalleled excellence through innovative software solutions.
        </p>

        <Link
          href="/solutions"
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full overflow-hidden shadow-xl transition-all hover:scale-105 active:scale-95 inline-block"
        >
          <span className="relative z-10 font-poppins">
            Discover Our Solutions
          </span>
          {/* 按钮光泽动画 */}
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
        </Link>
      </div>
    </main>
  );
}
