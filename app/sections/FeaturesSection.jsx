"use client";

import { useEffect, useRef } from "react";
import { HUB_CARDS } from "../../app/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@/components/CardComponent";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-header", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="animate-header text-4xl md:text-5xl font-bold mb-6">
          Explore the VOID Hub
        </h2>

        <p className="animate-header text-neutral-400 max-w-2xl mx-auto mb-16 text-lg">
          Discover tools designed to help you think, create, and learn better.
        </p>

        <div className="flex flex-wrap gap-10 justify-center">
          {HUB_CARDS.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <Card
                title={card.title}
                description={card.description}
                badge={card.badge}
                href={card.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
