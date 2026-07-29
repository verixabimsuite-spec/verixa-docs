"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, MessageSquare, Globe, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Mail size={16} /> Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions about licensing, enterprise deployment, or technical support? Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-6">
              <h2 className="text-xl font-bold text-white mb-4">Direct Contact</h2>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-300">Support Email</h3>
                  <a href="mailto:verixaidn@gmail.com" className="text-blue-400 hover:underline text-sm font-medium">
                    verixaidn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-300">GitHub Repository</h3>
                  <a href="https://github.com/verixabimsuite-spec/verixa-docs" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline text-sm font-medium">
                    github.com/verixabimsuite-spec
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-300">Support Hours</h3>
                  <p className="text-gray-400 text-sm">Monday – Friday: 09:00 – 17:00 (UTC+7)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-xs text-gray-400 leading-relaxed">
              <p className="font-semibold text-gray-300 mb-1">Autodesk App Store Submission</p>
              Official contact page for Verixa BIM Suite Autodesk App Store product listing and verification.
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle2 size={56} className="text-blue-400 mx-auto" />
                  <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                  <p className="text-gray-400 max-w-md mx-auto text-sm">
                    Thank you for reaching out. Our support team will get back to you within 24-48 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-sm font-semibold mt-4 transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-gray-800 text-white focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-gray-800 text-white focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Licensing inquiry / Technical question"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-gray-800 text-white focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help your team?"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-gray-800 text-white focus:outline-none focus:border-blue-500 text-sm resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center gap-2 transition-colors">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
