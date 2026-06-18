"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DivscreenContent from "./DivscreenContent";
import { homeContent } from "@/app/Data_Home/HomeContent";

export default function FullScreenSlider() {
  const [current, setCurrent] = useState(0);

  const { contentSpecial, sports, news, movies, kids } = homeContent;

  const slides = [
    {
      alt: sports.alt,
      src: "/images/sanae.png",
      title: sports.title,
      paragraph: sports.paragraph,
    },
    {
      alt: news.alt,
      src: "/images/ghazza.webp",
      title: news.title,
      paragraph: news.paragraph,
    },
    {
      alt: movies.alt,
      src: "/images/netflix.webp",
      title: movies.title,
      paragraph: movies.paragraph,
    },
    {
      alt: kids.alt,
      src: "/images/kids.webp",
      title: kids.title,
      paragraph: kids.paragraph,
    },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[60vh] md:h-screen">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex flex-col justify-center items-center"
        >
          <DivscreenContent
            alt={slides[current].alt}
            src={slides[current].src}
            title={slides[current].title}
            paragraph={slides[current].paragraph}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}