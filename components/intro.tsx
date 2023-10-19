"use client";
import Image from "next/image";
import React from "react";
import profilePic from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profilePic}
              alt="Matus portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            🙌
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:text-4l mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
      >
        <span className="font-bold">Hello, I'm Matus.</span> I'm a{" "}
        <span className="font-bold">student of applied informatics</span> with
        desire to be a <span className="font-bold">frontend developer</span>. I
        enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 "
        >
          Contact me here{" "}
          <BsArrowRight
            className="opacity-70 transition group-hover:translate-x-1.5"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          />
        </Link>
        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          className="flex cursor-pointer items-center rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15]  active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/matuskocian/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex cursor-pointer items-center rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/kocynko"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
