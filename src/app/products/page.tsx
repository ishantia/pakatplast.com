"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import productsData from "@/data/products.json";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Products() {
  return (
    <div className="overflow-hidden">
      <section className="pt-20 pb-16 px-6 relative">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-96 h-[300px] md:h-96 bg-cyan-100/50 rounded-full blur-[80px] -z-10" />
        
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6"
          >
            محصولات <span className="text-cyan-600">پاکت پلاست</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            تولید و چاپ انواع پاکت، پوشه و بگ‌شاپ‌های مقاوم با استفاده از مرغوب‌ترین متریال پلیمری. 
            برای استعلام قیمت هر محصول کلیک کنید.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {productsData.map((product, index) => {
              const imagePath = product.image.startsWith("/") ? product.image : `/${product.image.replace("assets/", "")}`;
              
              return (
                <motion.article 
                  key={index} 
                  variants={item}
                  className="group flex flex-col bg-white rounded-[32px] p-4 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-cyan-900/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-5 bg-slate-50">
                    <Image
                      src={imagePath}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col px-2 pb-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {product.desc}
                    </p>
                    <Link 
                      href="/contact"
                      className="w-full py-3.5 bg-slate-50 hover:bg-cyan-50 text-cyan-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors group/btn"
                    >
                      استعلام قیمت و سفارش
                      <ArrowLeft size={18} className="group-hover/btn:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
