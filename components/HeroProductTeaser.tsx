"use client";

import { AppImage } from '@/components/AppImage';

export function HeroProductTeaser() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12 px-2">
      {/* Clean Autodesk-Style App Window Frame */}
      <div className="rounded-lg bg-[#0F172A] border border-gray-700 shadow-2xl overflow-hidden">
        {/* Window Top Navigation Bar */}
        <div className="px-4 py-2.5 bg-[#1E293B] border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
            <span className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-[11px] text-gray-400">Autodesk Revit</span>
            <span>Verixa BIM Suite v1.4 — Dockable Workspace Panel</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Real Screenshot Preview */}
        <div className="relative overflow-hidden bg-gray-900">
          <AppImage
            src="/images/family-manager-1.png"
            alt="Verixa BIM Suite Interface Preview in Revit"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
