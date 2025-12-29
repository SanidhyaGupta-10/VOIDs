"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper51 = () => {
  const images = [
    {
      src: "/images/project-1.png",
      alt: "Project 1 by VOID",
    },
    {
      src: "/images/project-2.png",
      alt: "Project 2 by VOID",
    },
    {
      src: "/images/project-3.png",
      alt: "Project 3 by VOID",
    },
    {
      src: "/images/project-4.png",
      alt: "Project 4 by VOID",
    },
  ];

  return (
    <div
      className="flex flex-col gap-10 min-h-screen w-full items-center justify-center overflow-hidden ">
      <div className="text-5xl italics font-semibold text-white text-center mb-5">Projects by VOID:-</div>
      <Carousel_005 className="" images={images} autoplay showPagination loop />
    </div>
  );
};

export { Skiper51 };

const Carousel_005 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0
}) => {
  const css = `
  .Carousal_005 {
    width: 100%;
    height: 440px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_005 .swiper-slide {
    background-position: center;
    background-size: cover;
     border-radius: 25px;
  }

  .Carousal_005 .swiper-pagination-bullet {
    background-color: #fff !important;
  }
 
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-4xl px-5", className)}>
      <style>{css}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full">
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="creative"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_005"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}>
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <img
                className="h-full w-full scale-105 rounded-3xl object-cover"
                src={image.src}
                alt={image.alt} />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_005 };

/**
 * Skiper 51 Carousel_005 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
