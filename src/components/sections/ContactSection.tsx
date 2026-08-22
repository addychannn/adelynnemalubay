"use client";

import React, { useState } from "react";
import { contactConfig } from "@/config/contact";
import { StarIcon } from "../ui/StarIcon";
import { Button } from "../ui/Button";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailSubject = encodeURIComponent(
      formData.subject ? formData.subject : `Portfolio Inquiry from ${formData.name}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactConfig.email}?subject=${mailSubject}&body=${mailBody}`;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="bg-[#1B2217] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
          <StarIcon className="w-3.5 h-3.5 text-[#D2E874]" />
          <span className="text-xs font-bold text-[#D2E874] uppercase tracking-widest">
            LET&apos;S WORK TOGETHER
          </span>
        </div>

        {/* Title & Intro */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
          {contactConfig.headline}
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-12 leading-relaxed">
          {contactConfig.subheadline}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#263121] border border-[#D2E874]/30 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#D2E874] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-gray-300">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#131910] border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D2E874] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#131910] border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D2E874] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#131910] border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D2E874] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#131910] border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D2E874] transition-colors resize-none"
                  />
                </div>

                <div>
                  <Button type="submit" variant="lime" size="md" className="px-8">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Details */}
          <div className="lg:col-span-5 space-y-10">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#D2E874] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{contactConfig.email}</span>
                </a>

                <a
                  href={`https://${contactConfig.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#D2E874] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <span>{contactConfig.github}</span>
                </a>

                <a
                  href={`https://${contactConfig.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#D2E874] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <span>{contactConfig.linkedin}</span>
                </a>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{contactConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Open For List */}
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                OPEN FOR
              </h3>

              <div className="space-y-3">
                {contactConfig.openFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                    <StarIcon className="w-3.5 h-3.5 text-[#D2E874]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
