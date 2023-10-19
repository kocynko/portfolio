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
      className="mb-28 max-w-[45rem] scroll-mt-28 px-4 text-center leading-8"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In the pursuit of{" "}
        <span className="font-medium">Applied Informatics</span> at the Slovak
        University of Technology, I have been deeply engaged in the field of{" "}
        <span className="underline">Machine Learning</span> and{" "}
        <span className="underline">Deep Neural Networks</span>. Additionally, I
        have found out that my abilites are best represented in frontend
        development and personally I enjoy it the most as well.{" "}
        <span className="italic">
          Problem-solving in programming is my strongest suit.
        </span>{" "}
        My skill set encompasses{" "}
        <span className="font-medium">React, Next.js, Node.js, MySQL</span>, and{" "}
        <span className="font-medium">Python</span> with frameworks such as{" "}
        <span className="font-medium">Tensorflow</span>. At present, I am
        immersed in the study of <span className="underline">TypeScript</span>,
        and the journey so far has been highly rewarding. I am actively seeking
        a full-time position as a software developer.
      </p>

      <p>
        <span className="italic">Beyond the field of coding</span>, I am
        committed to maintaining an active presence in the gym, derive pleasure
        from video gaming, and appreciate the art of cinema. I value the
        creation of enduring memories with family and friends. From the feedback
        collected during my previous and current work experiences, I know that I
        am <span className="font-medium">quick learner</span>, always eager to
        absorb new skills, especially in areas that ignite my passion.
      </p>
    </motion.section>
  );
}
