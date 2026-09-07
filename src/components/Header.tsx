"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "خانه", href: "/" },
  { name: "محصولات", href: "/products" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس با ما", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll for floating header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus trap and outside click handler
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out flex justify-center",
        scrolled ? "pt-4" : "pt-0"
      )}>
        <a href="#main" className="absolute -top-20 right-4 z-[3000] bg-slate-900 text-white px-4 py-2 focus:top-4 transition-all rounded-lg">
          پرش به محتوای اصلی
        </a>
        
        <div className={clsx(
          "w-full max-w-7xl transition-all duration-300 mx-auto",
          scrolled ? "px-4" : "px-0"
        )}>
          <div className={clsx(
            "flex items-center justify-between transition-all duration-300 ease-out",
            scrolled 
              ? "glass-panel rounded-2xl px-6 py-3" 
              : "bg-white shadow-sm px-6 py-5 lg:px-10"
          )}>
            <div className="text-slate-900 font-black text-2xl tracking-tight">
              <Link href="/" aria-label="صفحه اصلی پاکت پلاست" className="flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-lg shadow-lg shadow-cyan-500/30">P</span>
                پاکت پلاست
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center" aria-label="منوی اصلی">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "relative py-2 text-sm lg:text-base font-semibold transition-colors",
                      isActive ? "text-cyan-600" : "text-slate-600 hover:text-slate-900"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan-500 rounded-t-full"
                      />
                    )}
                  </Link>
                );
              })}
              
              <Link href="/contact" className="hidden lg:flex items-center justify-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                سفارش سریع
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobileNav"
              aria-label="باز کردن منو"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobileNav"
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-[100dvh] w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col pt-24 px-8 md:hidden overflow-y-auto"
            aria-label="منوی موبایل"
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-6 left-6 text-slate-500 bg-slate-100 p-2 rounded-full hover:bg-slate-200"
              onClick={() => setIsOpen(false)}
              aria-label="بستن منو"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "block py-4 text-lg font-bold border-b border-slate-100 transition-colors",
                      isActive ? "text-cyan-600" : "text-slate-700"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link href="/contact" className="mt-8 flex items-center justify-center px-5 py-4 bg-cyan-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-cyan-600/30">
                درخواست مشاوره و استعلام
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
