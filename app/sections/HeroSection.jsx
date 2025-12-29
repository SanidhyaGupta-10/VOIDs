"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
        },
        "-=0.3"
      );

    // Scroll hint infinite bounce
    gsap.to(scrollHintRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-linear-to-b from-black via-neutral-900 to-black text-white min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 mt-14 tracking-tight"
        >
          Think Clearly. Ask Deeply. Understand Better.
        </h1>

        <p
          ref={textRef}
          className="text-neutral-400 text-lg md:text-xl mb-12"
        >
          VOID helps you interact with AI in a smarter, faster, and more
          insightful way.
        </p>

        <div
          ref={buttonsRef}
          className="flex justify-center gap-4 flex-wrap mb-16"
        >
          <Link
            href="/chat"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-semibold transition"
          >
            Get Started
          </Link>

          <Link
            href="/pricing"
            className="px-6 py-3 border border-neutral-700 text-neutral-300 hover:border-indigo-500 hover:text-indigo-400 rounded-md font-semibold transition"
          >
            Learn More
          </Link>
        </div>

        <div
          ref={scrollHintRef}
          className="text-neutral-500 text-sm tracking-wide"
        >
          ↓ Scroll to Explore ↓
        </div>
      </div>
    </section>
  );
}
