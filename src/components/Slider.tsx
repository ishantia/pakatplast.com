"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { src: "/images/slider/sanad1.webp", alt: "پاکت سند دکمه‌دار" },
  { src: "/images/slider/sanad2.webp", alt: "پوشه دکمه‌دار" },
  { src: "/images/slider/aroosaki1.webp", alt: "پاکت عروسکی و هدیه" },
  { src: "/images/slider/bag1.webp", alt: "بگ‌شاپ لوکس با چاپ اختصاصی" },
  { src: "/images/slider/bag2.webp", alt: "بگ‌شاپ ضدآب و مقاوم" },
  { src: "/images/slider/mri1.webp", alt: "پاکت MRI و پرونده بیمار" },
];

export function Slider() {
  return (
    <div className="rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Keyboard]}
        loop={true}
        speed={900}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[4/3] md:aspect-[12/5]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation & Pagination using Tailwind */}
      <button 
        className="custom-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-[#0f3460]/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
        aria-label="اسلاید بعدی"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button 
        className="custom-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-[#0f3460]/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
        aria-label="اسلاید قبلی"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="custom-swiper-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2" />
    </div>
  );
}
