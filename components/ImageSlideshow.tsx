"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { AppImage } from '@/components/AppImage';

export interface SlideImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageSlideshowProps {
  images: SlideImage[];
  autoPlayInterval?: number; // in ms
}

export function ImageSlideshow({ images, autoPlayInterval = 5000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;
    const timer = setInterval(slideNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying, images.length, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  return (
    <div
      className="w-full relative rounded-3xl bg-gray-950/80 border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Bar Frame */}
      <div className="px-5 py-3 bg-gray-900/90 border-b border-gray-800 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>
        <div className="text-xs text-gray-400 font-mono font-medium flex items-center gap-2">
          <span>{currentIndex + 1} / {images.length}</span>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-1 hover:text-white transition-colors"
            title={isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          >
            {isAutoPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="relative min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-950">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <AppImage
              src={currentImage.src}
              alt={currentImage.alt}
              width={1280}
              height={720}
              className="w-full h-auto object-contain max-h-[600px]"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrow Left */}
        {images.length > 1 && (
          <button
            onClick={slidePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 border border-gray-700 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-primary transition-all duration-300 shadow-lg hover:scale-110 z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Navigation Arrow Right */}
        {images.length > 1 && (
          <button
            onClick={slideNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 border border-gray-700 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-primary transition-all duration-300 shadow-lg hover:scale-110 z-20"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Caption & Navigation Controls Footer */}
      <div className="p-4 md:p-6 bg-gray-900/90 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Caption */}
        <div className="text-center md:text-left flex-1">
          <h4 className="text-base md:text-lg font-bold text-white mb-0.5">
            {currentImage.caption || currentImage.alt}
          </h4>
        </div>

        {/* Thumbnail Selector Bar */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                  currentIndex === idx
                    ? 'border-primary scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'border-gray-800 opacity-50 hover:opacity-100'
                }`}
              >
                <div className="w-16 h-10 relative bg-gray-950">
                  <AppImage
                    src={img.src}
                    alt={img.alt}
                    width={64}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
