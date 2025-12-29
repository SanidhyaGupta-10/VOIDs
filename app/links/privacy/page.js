"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Snowfall from "react-snowfall";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"
import SplashCursor from "@/components/SplashCursor";

const PrivacyPolicy = () => {
  const containerRef = useRef();
  const headingsRef = useRef([]);
  const paragraphsRef = useRef([]);
  const listsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate container
    tl.from(containerRef.current, { opacity: 0 });

    // Animate headings
    headingsRef.current.forEach((h, i) => {
      tl.from(h, { y: -30, opacity: 0 }, "-=0.7");
    });

    // Animate paragraphs
    paragraphsRef.current.forEach((p, i) => {
      tl.from(p, { y: 30, opacity: 0 }, "-=0.8");
    });

    // Animate lists
    listsRef.current.forEach((l, i) => {
      tl.from(l, { y: 30, opacity: 0 }, "-=0.8");
    });
  }, []);

  return (
   <>
    <Snowfall color="cyan" />
    <SplashCursor />
    <Navbar />
     <div ref={containerRef} className="min-h-screen bg-black text-white px-6 py-12 font-serif">
      <div className="max-w-3xl mx-auto">
        <h1
          ref={(el) => (headingsRef.current[0] = el)}
          className="text-5xl font-bold italic mb-8 text-gray-100 text-center"
        >
          Privacy Policy
        </h1>

        <p
          ref={(el) => (paragraphsRef.current[0] = el)}
          className="text-gray-300 mb-6 text-[22px] text-center italic"
        >
          VOID (“we”, “our”, “us”) values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website, services, and applications.
        </p>

        <h2
          ref={(el) => (headingsRef.current[1] = el)}
          className="text-3xl font-semibold mb-4 italic text-center text-gray-100"
        >
          Information We Collect
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[1] = el)}
          className="text-gray-300 mb-6 text-[22px] text-center italic"
        >
          We may collect personal information such as your name, email address, and usage data when you interact with our services. This information is used solely to improve your experience and provide relevant content.
        </p>

        <h2
          ref={(el) => (headingsRef.current[2] = el)}
          className="text-3xl font-semibold mb-4 italic text-center text-gray-100"
        >
          How We Use Your Information
        </h2>
        <ul
          ref={(el) => (listsRef.current[0] = el)}
          className="list-disc list-inside text-gray-300 mb-6 text-[22px] text-center italic space-y-2"
        >
          <li>Provide, maintain, and improve VOID services.</li>
          <li>Respond to inquiries and support requests.</li>
          <li>Send updates, newsletters, and promotional information (optional).</li>
          <li>Analyze trends and user engagement to enhance the platform.</li>
        </ul>

        <h2
          ref={(el) => (headingsRef.current[3] = el)}
          className="text-3xl font-semibold mb-4 italic text-center text-gray-100"
        >
          Data Protection
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[2] = el)}
          className="text-gray-300 mb-6 text-[22px] text-center italic"
        >
          We implement reasonable security measures to protect your information from unauthorized access, disclosure, or alteration. However, no online service is 100% secure.
        </p>

        <h2
          ref={(el) => (headingsRef.current[4] = el)}
          className="text-3xl font-semibold mb-4 italic text-center text-gray-100"
        >
          Third-Party Services
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[3] = el)}
          className="text-gray-300 mb-6 text-[22px] text-center italic"
        >
          VOID may use third-party services for analytics, hosting, and integrations. These services adhere to their own privacy policies, and we encourage you to review them.
        </p>

        <h2
          ref={(el) => (headingsRef.current[5] = el)}
          className="text-3xl font-semibold mb-4 italic text-center text-gray-100"
        >
          Changes to this Policy
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[4] = el)}
          className="text-gray-300 mb-6 text-[22px] text-center italic"
        >
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the updated date.
        </p>

        <p className="text-gray-300 text-[22px] text-center italic">
          Last updated: December 17, 2025
        </p>
      </div>
    </div>
    <Footer />
   </>
  );
};

export default PrivacyPolicy;
