"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Snowfall from "react-snowfall";
import SplashCursor from "@/components/SplashCursor";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Terms = () => {
  const containerRef = useRef();
  const headingsRef = useRef([]);
  const paragraphsRef = useRef([]);
  const listsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.from(containerRef.current, { opacity: 0 });

    headingsRef.current.forEach((h, i) => tl.from(h, { y: -30, opacity: 0 }, "-=0.7"));
    paragraphsRef.current.forEach((p, i) => tl.from(p, { y: 30, opacity: 0 }, "-=0.8"));
    listsRef.current.forEach((l, i) => tl.from(l, { y: 30, opacity: 0 }, "-=0.8"));
  }, []);

  return (
   <>
   
    <SplashCursor />
    <Navbar />
     <div ref={containerRef} className="min-h-screen bg-black text-white px-6 py-12 font-serif">
    <Snowfall color="cyan" />
      <div className="max-w-3xl mx-auto">
        <h1
          ref={(el) => (headingsRef.current[0] = el)}
          className="text-5xl font-bold italic mb-8 text-gray-100 text-center"
        >
          Terms & Conditions
        </h1>

        <p
          ref={(el) => (paragraphsRef.current[0] = el)}
          className="text-gray-300 mb-6 text-lg italic"
        >
          Welcome to VOID! By accessing or using our services, you agree to comply with and be bound by these Terms & Conditions.
        </p>

        <h2
          ref={(el) => (headingsRef.current[1] = el)}
          className="text-3xl font-semibold mb-4 italic text-gray-100"
        >
          Use of Service
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[1] = el)}
          className="text-gray-300 mb-6 text-lg italic"
        >
          You agree to use VOID services for lawful purposes only. Unauthorized use, including hacking, copying, or distributing our content, is strictly prohibited.
        </p>

        <h2
          ref={(el) => (headingsRef.current[2] = el)}
          className="text-3xl font-semibold mb-4 italic text-gray-100"
        >
          Intellectual Property
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[2] = el)}
          className="text-gray-300 mb-6 text-lg italic"
        >
          All content, designs, software, and materials provided by VOID are the intellectual property of VOID and are protected under copyright laws. You may not reproduce, distribute, or create derivative works without permission.
        </p>

        <h2
          ref={(el) => (headingsRef.current[3] = el)}
          className="text-3xl font-semibold mb-4 italic text-gray-100"
        >
          Disclaimer of Liability
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[3] = el)}
          className="text-gray-300 mb-6 text-lg italic"
        >
          VOID provides services “as is” without warranties of any kind. We are not liable for any direct, indirect, or consequential damages resulting from the use of our services.
        </p>

        <h2
          ref={(el) => (headingsRef.current[4] = el)}
          className="text-3xl font-semibold mb-4 italic text-gray-100"
        >
          Changes to Terms
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[4] = el)}
          className="text-gray-300 mb-6 text-lg italic"
        >
          We reserve the right to modify these Terms & Conditions at any time. Continued use of VOID services after changes signifies your acceptance of the updated terms.
        </p>

        <h2
          ref={(el) => (headingsRef.current[5] = el)}
          className="text-3xl font-semibold mb-4 italic text-gray-100"
        >
          Contact Us
        </h2>
        <p
          ref={(el) => (paragraphsRef.current[5] = el)}
          className="text-gray-300 mb-6 text-lg italic"
        >
          For questions regarding these Terms & Conditions, please contact us via Instagram or GitHub:
        </p>

        <ul
          ref={(el) => (listsRef.current[0] = el)}
          className="list-disc list-inside text-gray-300 text-lg italic space-y-2"
        >
          <li>Instagram: <a className="text-pink-500" href="https://www.instagram.com/sanidhyagupta10/" target="_blank" rel="noopener noreferrer">@sanidhyagupta10</a></li>
          <li>GitHub: <a className="text-white" href="https://github.com/SanidhyaGupta-10" target="_blank" rel="noopener noreferrer">SanidhyaGupta-10</a></li>
        </ul>

        <p className="text-gray-300 text-lg italic mt-8">
          Last updated: December 30, 2025
        </p>
      </div>
    </div>
    <Footer />
   </>
  );
};

export default Terms;
