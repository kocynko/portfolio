"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.7);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-180 scroll-mt-28 px-4 text-center leading-8"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a software developer with a strong focus on{" "}
        <span className="font-medium">frontend development</span>, currently
        pursuing Applied Informatics at the Slovak University of Technology. I
        enjoy building clean, responsive, and user-friendly web applications, and
        I’m especially interested in modern frontend architecture and
        performance.{" "}
        <span className="italic">
          Problem-solving and building intuitive UI experiences are my strongest
          strengths.
        </span>{" "}
        My main tech stack includes{" "}
        <span className="font-medium">
          React, TypeScript, Vite, Node.js, and GraphQL
        </span>
        , along with experience in SQL databases. I’m continuously improving my
        skills in TypeScript and modern frontend patterns.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I like staying active in
        the gym, playing video games, and watching films. I also value spending
        quality time with family and friends. From my previous experiences, I’ve
        been described as a <span className="font-medium">fast learner</span> who
        is adaptable and motivated to pick up new technologies quickly,
        especially in areas I enjoy.
      </p>
    </motion.section>
  );
}
