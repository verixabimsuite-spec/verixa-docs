"use client";

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6">
      <div className="max-w-4xl mx-auto w-full space-y-20">
        
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Verixa Suite</h1>
          <p className="text-xl text-secondaryText max-w-2xl mx-auto">
            We build next-generation tools to solve the most complex workflow challenges in Autodesk Revit.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-secondaryText leading-relaxed">
              To empower BIM professionals with automation tools that eliminate repetitive tasks, allowing them to focus on design, engineering, and high-value coordination.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-secondaryText leading-relaxed">
              To become the industry standard productivity ecosystem for Revit users globally, seamlessly integrating data management with model coordination.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-card/50 p-8 md:p-12 rounded-2xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-secondaryText leading-relaxed">
            <p>
              Verixa Suite was born out of frustration. As BIM Coordinators and Engineers, we spent thousands of hours manually tagging elements, creating sheets, and organizing messy family libraries.
            </p>
            <p>
              We realized that the out-of-the-box tools were not enough for enterprise-scale projects. So, we started building our own internal scripts. What started as a few macros quickly evolved into a comprehensive suite of professional plugins.
            </p>
            <p>
              Today, Verixa Suite is designed from the ground up for performance, stability, and ease of use—helping AEC companies worldwide deliver projects faster.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
