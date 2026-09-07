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
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      <a href="#main" className="absolute -top-20 right-4 z-[3000] bg-dark text-white px-4 py-2 focus:top-4 transition-all">
        پرش به محتوای اصلی
      </a>
      
      <div className="container mx-auto max-w-[1240px] px-5 py-4 lg:py-5 flex items-center justify-between">
        <div className="text-dark font-black text-2xl lg:text-3xl">
          <Link href="/" aria-label="صفحه اصلی پاکت پلاست">
            پاکت پلاست
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10" aria-label="منوی اصلی">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative py-2 text-[1.1rem] font-medium transition-colors hover:text-primary-strong",
                  isActive ? "text-primary-strong" : "text-text"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobileNav"
          aria-label="باز کردن منو"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
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
            className="fixed top-0 right-0 h-[100dvh] w-[280px] bg-dark shadow-[-5px_0_30px_rgba(0,0,0,0.3)] z-50 flex flex-col pt-24 px-8 lg:hidden"
            aria-label="منوی موبایل"
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-6 left-6 text-white p-2"
              onClick={() => setIsOpen(false)}
              aria-label="بستن منو"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "block py-4 text-xl border-b border-white/10 transition-colors",
                      isActive ? "text-primary font-bold" : "text-white"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
