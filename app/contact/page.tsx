"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Loader2, Youtube } from "lucide-react";
import { RiTwitterXFill, RiBilibiliFill } from "react-icons/ri";

// 严格匹配模板 (image_8ea6b6.png) 中的变量名
type FormData = {
  name: string; // 对应 {{name}}
  email: string; // 对应 {{email}}
  title: string; // 对应 {{title}}
  content: string; // 对应 {{content}}
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    setIsMounted(true);
    // 使用图片 (image_99356c.png) 中的 Public Key 初始化
    emailjs.init("dlt5n7BYal5yfC2PY");
  }, []);

  const onSubmit = async () => {
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 使用你提供的最新 ID
      const result = await emailjs.sendForm(
        "service_hj84yx3", // Service ID (来自 image_99fcb8.png)
        "template_ce3sync", // 你指定的最新 Template ID
        formRef.current,
        "dlt5n7BYal5yfC2PY", // Public Key
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        reset();
      }
    } catch (error: any) {
      // 提取具体错误文本，避免显示 {}
      console.error("EmailJS Error:", error?.text || error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-white py-20 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          Get In Touch With Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 左侧：表单卡片 */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-gray-500 mb-8 text-sm">
              We'd love to hear from you!
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message Content
                </label>
                <textarea
                  {...register("content", { required: true })}
                  name="content"
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#007bff] text-white py-4 rounded-xl font-bold hover:bg-[#0069d9] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center font-medium animate-pulse">
                  ✓ Sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center font-medium">
                  × Failed to send. Please check console.
                </p>
              )}
            </form>
          </div>

          {/* 右侧：联系信息 */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-gray-600">info@qualityengine.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="text-gray-600 leading-tight pt-1">
                    123 Tech Avenue, Suite 400
                    <br />
                    Innovation City, CA 90210
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-50 rounded-xl text-gray-500 hover:text-white hover:bg-black transition-all"
                >
                  <RiTwitterXFill size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-50 rounded-xl text-gray-500 hover:text-white hover:bg-[#fb7299] transition-all"
                >
                  <RiBilibiliFill size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-50 rounded-xl text-gray-500 hover:text-white hover:bg-red-600 transition-all"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
