"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:matus.kociann@gmail.com"
        >
          matus.kociann@gmail.com
        </a>{" "}
        or through this form below.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your Email"
          className="h-14 rounded-lg border-black/10 px-4 transition-all dark:bg-white/80 dark:outline-hidden dark:focus:bg-white"
          maxLength={500}
          required
        />
        <textarea
          className="my-3 h-52 rounded-lg border-black/10 p-4 transition-all dark:bg-white/80 dark:outline-hidden dark:focus:bg-white"
          placeholder="Your Message"
          name="message"
          maxLength={500}
          required
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
