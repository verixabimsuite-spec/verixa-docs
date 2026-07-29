"use client";

import Link from 'next/link';

interface BackButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export function BackButton({ label = "Back to Home", href = "/", className = "" }: BackButtonProps) {
  return (
    <div className={`w-full py-4 mb-6 z-40 ${className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 hover:bg-blue-600/20 border border-gray-800 hover:border-blue-500/50 text-gray-300 hover:text-white font-medium text-sm transition-all duration-200 group shadow-lg backdrop-blur-md"
        >
          <svg
            className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>← {label}</span>
        </Link>

        {/* Quick Home Link */}
        <Link
          href="/"
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors hidden sm:block"
        >
          Verixa BIM Suite Home 🏠
        </Link>
      </div>
    </div>
  );
}

export default BackButton;
