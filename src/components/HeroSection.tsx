"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import imgMM from "@/assets/mm.png";
import heroTexture from "@/assets/hero-texture.png";

interface HeroSlideProps {
  id: number | string;
  type: "networking" | "taxes" | "podcast" | "ads";
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  location?: string;
  date?: string;
  theme?: string;
  mask?: string;
  bg?: string | { src: string };
  portrait?: string | { src: string };
}

const HeroSection = ({ slides = [] }: { slides?: HeroSlideProps[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 15000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-[600px] md:h-[500px] overflow-hidden bg-black pt-24 md:pt-20" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
            {/* Background */}
            <div className={`absolute inset-0 ${typeof slide.bg === 'string' && slide.bg.startsWith('bg-') ? slide.bg : ''}`}>
              {(typeof slide.bg !== 'string' || !slide.bg.startsWith('bg-')) && (
                <img 
                  src={(typeof slide.bg === 'string' ? (slide.bg || null) : (slide.bg ? (slide.bg as any).src : null)) as any} 
                  alt="" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
                />
              )}
            </div>

            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center max-w-[1400px] mx-auto px-6 lg:px-12">
              {/* Left Content */}
              <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left h-full">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-1"
                    >
                      <h2 className="text-sm md:text-base font-black text-white tracking-tighter uppercase whitespace-nowrap">
                        {slide.title1}
                      </h2>

                      {slide.type === 'networking' && (
                        <>
                          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[0.85] font-black italic text-stroke-black text-white ml-[-4px]">
                            <span className="marketing-red-gradient block text-stroke-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                              {slide.title2}
                            </span>
                            <span className="marketing-red-gradient block text-stroke-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                              {slide.title3}
                            </span>
                          </h1>
                          <p className="text-sm md:text-base font-black text-white tracking-tighter uppercase">
                            {slide.title4}
                          </p>
                          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-none font-black italic marketing-red-gradient text-stroke-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] uppercase">
                            {slide.location}
                          </h1>
                          <p className="text-lg md:text-xl font-black text-white tracking-tighter uppercase mb-4">
                            {slide.date}
                          </p>
                        </>
                      )}

                      {slide.type === 'taxes' && (
                        <>
                          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[0.85] font-black italic text-[#fbbf24] tracking-tighter uppercase text-glow-yellow">
                            {slide.title2}
                          </h1>
                          <div className="bg-white text-black inline-block px-3 py-1 text-xl md:text-2xl font-black uppercase">
                            {slide.title3}
                          </div>
                          <p className="text-lg md:text-xl font-black text-[#fbbf24] tracking-tighter uppercase mb-4">
                            {slide.title4}
                          </p>
                        </>
                      )}

                      {slide.type === 'podcast' && (
                        <>
                          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[0.85] font-black italic text-[#ff4d00] tracking-tighter uppercase">
                            {slide.title2}
                          </h1>
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 inline-block px-3 py-1 text-base md:text-xl font-black uppercase text-white">
                            {slide.title3}
                          </div>
                          <h1 className="text-5xl md:text-6xl lg:text-[100px] leading-none font-black italic text-stroke-white text-transparent mb-4 uppercase">
                            {slide.title4}
                          </h1>
                        </>
                      )}

                      {slide.type === 'ads' && (
                        <>
                          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic text-white uppercase leading-none">ADS</h1>
                            <div className="bg-[#fbbf24] text-black px-3 py-0.5 text-2xl md:text-3xl font-black italic uppercase -skew-x-12">
                              FROM
                            </div>
                            <div className="bg-[#fbbf24] text-black px-3 py-0.5 text-2xl md:text-3xl font-black italic uppercase -skew-x-12">
                              ADAM COHEN
                            </div>
                          </div>
                          <p className="text-base md:text-lg font-bold text-white italic uppercase">
                            {slide.title3}
                          </p>
                          <div className="text-xl md:text-2xl font-black text-[#fbbf24] mb-4 uppercase">
                            {slide.title4}
                          </div>
                        </>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="marketing-red-bg text-white px-8 py-2.5 rounded-sm font-black text-base tracking-tighter flex items-center gap-2 uppercase shadow-2xl mx-auto md:mx-0"
                      >
                        LEARN MORE <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side Portrait */}
              <div className="w-full md:w-[40%] h-full relative flex items-center justify-center md:justify-end overflow-visible">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6 }}
                      className="relative h-full w-full max-w-[450px] flex items-end"
                    >
                      {/* Image with Mask */}
                      <div className={`w-full h-full relative z-20 overflow-hidden ${slide.mask === 'hexagon' ? 'mask-hexagon' :
                        slide.mask === 'sharp-cut' ? 'mask-sharp-cut' :
                          slide.mask === 'arrow-right' ? 'mask-arrow-right' :
                            ''
                        }`}>
                        {(slide.portrait || (slide.portrait as any)?.src) && (
                          <img
                            src={(typeof slide.portrait === 'string' ? slide.portrait : (slide.portrait ? (slide.portrait as any).src : null)) as any}
                            alt="Adam Cohen"
                            className="w-full h-full object-cover object-top"
                          />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 text-white p-4 transition-all"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 text-white p-4 transition-all"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === i ? 'w-8 bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
