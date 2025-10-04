"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">results-driven Developer</span> with hands-on experience in the banking sector, specializing in designing reconciliation systems and automating financial processes. My proven ability is to <span className="italic">bridge business needs with technical solutions</span> through Agile collaboration and clear documentation. I am experienced with <span className="font-medium">SQL</span> and stakeholder-facing roles in high-impact projects.
      </p>
    </motion.section>
  );
}