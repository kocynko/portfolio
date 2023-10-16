"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-3 text-gray-700">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:example.com"
        >
          example.com
        </a>{" "}
        or through this form below.
      </p>
      <form
        action=""
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          placeholder="Your Email"
          className="h-14 rounded-lg border border-black/10 px-4"
        />
        <textarea
          className="my-3 h-52 rounded-lg border border-black/10 p-4"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="hover: group flex h-[3rem] w-[8rem] scale-110 items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Submit
          <FaPaperPlane className="opacity-70 transition group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
