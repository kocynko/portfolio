"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", update);

  function update() {
    if (scrollY?.get() < scrollY?.getPrevious()) {
      setHidden(false);
    } else if (
      scrollY?.get() > 100 &&
      scrollY?.get() > scrollY?.getPrevious()
    ) {
      setHidden(true);
    }
  }

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full  rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        variants={variants}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              variants={variants}
              initial={{ y: -100, opacity: 0 }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
              className="flex h-3/4 items-center justify-center"
              key={link.hash}
            >
              <Link
                className="flex w-full items-center justify-center p-3 transition-colors hover:text-gray-950"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
