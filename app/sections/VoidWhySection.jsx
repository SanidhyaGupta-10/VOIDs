"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VoidWhySection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    /* ---------------- GSAP ANIMATIONS ---------------- */
    const ctx = gsap.context(() => {
      gsap.from(".void-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".void-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    /* ---------------- THREE.JS BACKGROUND ---------------- */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, 400);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.004;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      ctx.revert();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[500px]  text-white overflow-hidden py-24"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="void-title text-4xl md:text-5xl font-bold mb-6">
          Why VOID
        </h2>
        <p className="void-text text-lg text-gray-300 mb-4">
          VOID is not a chat toy. It is a disciplined AI system built to solve,
          structure, and reason.
        </p>
        <p className="void-text text-lg text-gray-300 mb-4">
          Designed for users who value clarity over noise and insight over verbosity.
        </p>
        <p className="void-text text-lg text-gray-300 mb-12">
          Free to start. Powerful when you need more.
        </p>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="void-card bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Structured Intelligence</h3>
            <p className="text-gray-400 text-sm">
              Outputs are formatted, reasoned, and actionable — not raw text dumps.
            </p>
          </div>
          <div className="void-card bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Controlled Power</h3>
            <p className="text-gray-400 text-sm">
              Smart limits ensure consistency, reliability, and responsible usage.
            </p>
          </div>
          <div className="void-card bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Built to Scale</h3>
            <p className="text-gray-400 text-sm">
              From individuals to teams — VOID grows with your workload.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
