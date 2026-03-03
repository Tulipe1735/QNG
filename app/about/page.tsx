import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 这里的 py-20 确保了与 Navbar 的间距，并给上下留白 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* 左侧：图片容器 */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/slidebean-iW9oP7Ljkbg-unsplash.jpg"
                alt="Our Team collaborating"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* 右侧：文字内容 */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins tracking-tight">
              About Our Company
            </h2>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed font-poppins">
                Quality Engine is at the forefront of software innovation,
                dedicated to building high-quality, scalable, and secure
                applications. Our team of skilled engineers and visionary
                architects specializes in delivering bespoke solutions that
                transform businesses and drive efficiency. We believe in
                crafting elegant code and seamless user experiences that stand
                the test of time.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed font-poppins">
                With a commitment to continuous improvement and client
                satisfaction, we partner with businesses to navigate complex
                technological landscapes, turning challenges into opportunities
                for growth.
              </p>
            </div>

            {/* CTA 按钮 */}
            <div className="pt-4">
              <Link
                href="/team"
                className="inline-block bg-[#007bff] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_-5px_rgba(0,123,255,0.4)] hover:bg-[#0069d9] hover:shadow-lg transition-all active:scale-95 font-poppins"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
