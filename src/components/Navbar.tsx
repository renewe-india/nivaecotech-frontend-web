"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { MenuView, MobileNavigation } from "./ui/menu-view";

export function Navigation() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="container-fluid bg-light d-none d-lg-block">
        <div className="row align-items-center top-bar"></div>
      </div>

      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const isScrollingDown = currentScroll > lastScroll;

      setIsVisible(!isScrollingDown);

      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <motion.div
        initial={{ transform: "translateY(-100%)" }}
        animate={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
        exit={{ transform: "translateY(-100%)" }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed bg-white inset-x-0 max-w-9xl mx-auto z-50",
          className
        )}
      >
        <MobileNavigation />
        <div className="hidden lg:block py-2 px-4">
          <MenuView />
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
