"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Snowfall from "react-snowfall";
import SplashCursor from "@/components/SplashCursor";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";



const About = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const paragraphsRef = useRef([]);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(containerRef.current, { opacity: 0 });
    tl.from(titleRef.current, { y: -50, opacity: 0 });
    paragraphsRef.current.forEach((p, i) => tl.from(p, { y: 30, opacity: 0 }, "-=0.5"));
    buttonsRef.current.forEach((btn, i) => tl.from(btn, { scale: 0.8, opacity: 0 }, "-=0.7"));
  }, []);

  return (
   <>
    <Snowfall color="cyan"/>
      <SplashCursor />
      <Navbar />
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12 font-serif"
    >
      <div className="max-w-3xl text-center">
        <h1
          ref={titleRef}
          className="text-6xl font-bold italic mb-8 tracking-wide text-gray-100"
        >
          VOID
        </h1>

        {/* About */}
        {[
          "VOID is a cutting-edge digital ecosystem designed to empower developers, creators, and tech enthusiasts.",
          "Our mission is to provide innovative tools for app development, automation, AI integration, and data analytics.",
          "With VOID, you can streamline workflows, experiment with modern tech stacks, and bring ideas to life effortlessly.",
          "Join our growing community of innovators and discover how VOID is transforming the way technology and creativity intersect."
        ].map((text, index) => (
          <p
            ref={(el) => (paragraphsRef.current[index] = el)}
            key={index}
            className="text-gray-300 mb-6 text-[20px] italic"
          >
            {text}
          </p>
        ))}

        {/* Features */}
        <div className="mb-10 text-left bg-gray-900/50 p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 italic text-gray-100">Features of VOID</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg italic">
            <li>Cross-platform development tools</li>
            <li>AI-assisted automation and analytics</li>
            <li>Open-source integrations for developers</li>
            <li>Seamless community collaboration</li>
            <li>High-performance workflows for creators and innovators</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-6">
          {/* Instagram */}
          <a
            ref={(el) => (buttonsRef.current[0] = el)}
            href="https://www.instagram.com/sanidhyagupta10/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3 rounded-xl border-2 border-gray-600 bg-gray-900 hover:bg-gray-800 transition transform hover:scale-105 text-pink-500 font-semibold shadow-md"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.432.403a4.92 4.92 0 011.75 1.13 4.92 4.92 0 011.13 1.75c.163.462.347 1.262.403 2.432.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.432a4.92 4.92 0 01-1.13 1.75 4.92 4.92 0 01-1.75 1.13c-.462.163-1.262.347-2.432.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.432-.403a4.902 4.902 0 01-1.75-1.13 4.902 4.902 0 01-1.13-1.75c-.163-.462-.347-1.262-.403-2.432C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.432a4.902 4.902 0 011.13-1.75 4.902 4.902 0 011.75-1.13c.462-.163 1.262-.347 2.432-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.78.13 4.79.326 4.01.58a6.92 6.92 0 00-2.492 1.01A6.92 6.92 0 00.58 4.01c-.254.78-.45 1.77-.508 3.042C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.272.254 2.262.508 3.042a6.92 6.92 0 001.01 2.492 6.92 6.92 0 002.492 1.01c.78.254 1.77.45 3.042.508 1.28.059 1.684.072 4.948.072s3.668-.013 4.948-.072c1.272-.058 2.262-.254 3.042-.508a6.902 6.902 0 002.492-1.01 6.902 6.902 0 001.01-2.492c.254-.78.45-1.77.508-3.042.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.272-.254-2.262-.508-3.042a6.902 6.902 0 00-1.01-2.492 6.902 6.902 0 00-2.492-1.01c-.78-.254-1.77-.45-3.042-.508C15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
            </svg>
            Instagram
          </a>

          {/* GitHub */}
          <a
            ref={(el) => (buttonsRef.current[1] = el)}
            href="https://github.com/SanidhyaGupta-10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3 rounded-xl border-2 border-gray-600 bg-gray-900 hover:bg-gray-800 transition transform hover:scale-105 text-white font-semibold shadow-md"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.23 1.84 1.23 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.205 0 1.59-.015 2.87-.015 3.26 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default About;
