"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlideProps {
  id: number | string;
  variant: "intro" | "brand" | "cta";
  title1?: string | null;
  title2?: string | null;
  title3?: string | null;
  title4?: string | null;
  location?: string | null;
  link?: string | null;
  bg?: string | null;
  portrait?: string | null;
}

const HeroSection = ({ slides = [] }: { slides?: HeroSlideProps[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (slides.length === 0) return null;

  return (
    <section
      className="relative h-[720px] md:h-[620px] xl:h-[max(680px,min(820px,42vw))] overflow-hidden bg-black text-white pt-24 md:pt-20"
      ref={emblaRef}
    >
      <div className="flex h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
            {/* Mobile: portrait image only */}
            {slide.portrait && (
              <img
                src={slide.portrait}
                alt=""
                className="md:hidden absolute inset-0 w-full h-full object-cover object-top"
              />
            )}
            {/* Desktop & tablet: background image only */}
            {slide.bg && (
              <img
                src={slide.bg}
                alt=""
                className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
              />
            )}
            {/* Mobile — dark bottom scrim for readable text, image visible at top */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
            <div className="md:hidden absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />
            {/* Desktop — dark left fade for text */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

            <div className="relative z-10 w-full h-full flex flex-col items-center md:items-start max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
              {/* Text Content */}
              <div className="w-full md:w-[50%] lg:w-[44%] xl:max-w-2xl flex flex-col justify-end md:justify-center text-center md:text-left h-full pb-24 md:pb-0">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-3 md:space-y-5 max-md:bg-black/70 max-md:backdrop-blur-sm max-md:rounded-2xl max-md:p-5 max-md:border max-md:border-white/10"
                    >
                      {slide.variant === "intro" && (
                        <>
                          {slide.title2 && (
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight drop-shadow-lg">
                              <span className="gold-gradient-text">{slide.title2}</span>
                            </h1>
                          )}
                          {slide.title3 && (
                            <p className="text-sm md:text-lg text-[#D4AF37] font-semibold tracking-[0.12em] uppercase drop-shadow-md">
                              {slide.title3}
                            </p>
                          )}
                          {slide.title4 && (
                            <p className="text-base md:text-xl text-white/95 font-normal leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md">
                              {slide.title4}
                            </p>
                          )}
                          {slide.location && (
                            <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-xl mx-auto md:mx-0 border-l-2 border-[#D4AF37] pl-4 italic drop-shadow-md">
                              {slide.location}
                            </p>
                          )}
                        </>
                      )}

                      {slide.variant === "brand" && (
                        <>
                          {slide.title1 && (
                            <p className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase font-medium drop-shadow-md">
                              {slide.title1}
                            </p>
                          )}
                          {slide.title2 && (
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white leading-tight drop-shadow-lg">
                              {slide.title2}
                            </h2>
                          )}
                          {slide.title3 && (
                            <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold leading-tight drop-shadow-lg">
                              <span className="gold-gradient-text">{slide.title3}</span>
                            </h3>
                          )}
                          {slide.title4 && (
                            <blockquote className="text-base md:text-xl text-white/80 italic border-l-2 border-[#D4AF37] pl-5 py-1 max-w-lg mx-auto md:mx-0 drop-shadow-md">
                              {slide.title4}
                            </blockquote>
                          )}
                        </>
                      )}

                      {slide.variant === "cta" && (
                        <>
                          {slide.title1 && (
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight drop-shadow-lg">
                              <span className="gold-gradient-text">{slide.title1}</span>
                            </h1>
                          )}
                          {slide.title4 && (
                            <p className="text-lg md:text-2xl lg:text-3xl text-white/95 font-normal leading-snug max-w-2xl mx-auto md:mx-0 drop-shadow-md">
                              {slide.title4}
                            </p>
                          )}
                          <div className="pt-2">
                            <Link
                              href={slide.link || "/book"}
                              className="hero-btn inline-flex items-center gap-2 !px-10 !py-4"
                            >
                              Book Adam Cohen <ChevronRight className="w-5 h-5" />
                            </Link>
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      {slides.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/90 border border-white/20 text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/90 border border-white/20 text-white p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === i ? "w-10 bg-[#D4AF37]" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
