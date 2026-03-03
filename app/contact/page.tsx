"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { RiTwitterXFill, RiBilibiliFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

// 必须严格匹配你模板图 (image_8ebd42.png) 中的变量名
type FormData = {
  name: string; // 对应 {{name}}
  email: string; // 对应 {{email}}
  title: string; // 对应 {{title}}，作为消息主题或内容
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
    // 初始化 Public Key (来自 image_99356c.png)
    emailjs.init("dlt5n7BYal5yfC2PY");
  }, []);

  const onSubmit = async () => {
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.sendForm(
        "service_hj84yx3", // Service ID (来自 image_99fcb8.png)
        "template_vgq6m0g", // Template ID (来自 image_9935a4.png)
        formRef.current,
        "dlt5n7BYal5yfC2PY", // Public Key
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        reset();
      }
    } catch (error: any) {
      // 捕获并打印具体错误字符串，不再显示空对象 {}
      console.error("EmailJS Error:", error?.text || error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Get In Touch With Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 左侧表单 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-2xl font-semibold mb-1">Send Us a Message</h3>
            <p className="text-gray-500 mb-8 text-sm">
              We'd love to hear from you!
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Your Name
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name" // 对应 {{name}}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Your Email
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email" // 对应 {{email}}
                  type="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Subject / Message
                </label>
                <textarea
                  {...register("title", { required: true })}
                  name="title" // 对应 {{title}}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#007bff] text-white py-3 rounded-lg font-bold hover:bg-blue-600 flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center text-sm">
                  ✓ Sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center text-sm">
                  × Failed to send. Please check Console.
                </p>
              )}
            </form>
          </div>

          {/* 右侧信息保持不变... */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <Phone size={18} className="text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Mail size={18} className="text-blue-500" />
                  <span>info@qualityengine.com</span>
                </div>
                <div className="flex items-start gap-4 text-gray-600">
                  <MapPin size={18} className="text-blue-500 mt-1" />
                  <span>
                    123 Tech Avenue, Suite 400
                    <br />
                    Innovation City, CA 90210
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
