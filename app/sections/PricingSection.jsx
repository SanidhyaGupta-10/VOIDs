"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PLANS } from "@/app/constants";

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="bg-black py-24 text-white"
    >
      <div ref={titleRef} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Pricing Plans</h2>
        <p className="text-neutral-400 mt-4 text-lg max-w-2xl mx-auto">
          Choose a plan that fits your needs. Whether you're just getting started
          or need full access, we have you covered.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(PLANS).map((plan, index) => (
          <div
            key={plan.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1f1f1f 0%, #2c2c2c 50%, #111111 100%)",
            }}
          >
            <div className="relative text-left z-10">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-indigo-400 text-3xl font-extrabold mb-4">
                {plan.price}
              </p>
              <p className="text-neutral-400 mb-6">{plan.description}</p>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feat, i) => (
                  <li
                    key={i}
                    className="text-neutral-300 flex items-center gap-2"
                  >
                    <span className="text-indigo-400 font-bold">✔</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="/"
                className="inline-block text-indigo-400 font-semibold hover:underline text-lg"
              >
                See Full Pricing &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
