"use client";

import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import Snowfall from "react-snowfall";
import SplashCursor from "@/components/SplashCursor";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";



export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Snowfall color="cyan" />
    <SplashCursor />
    <Navbar />
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 space-y-8">
      <Toaster position="top-right" />

      <div className="w-full mt-10 mb-5 max-w-lg bg-neutral-900 border border-neutral-800 shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-white text-center">Contact VOID</h1>
        <p className="text-sm text-neutral-400 text-center">
          Have an idea or want to collaborate? Send a message.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-white"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black hover:bg-neutral-200 rounded-xl px-4 py-3 font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="flex gap-4 mb-10">
        {/* GitHub Button */}
        <button
          onClick={() => window.open("https://github.com/SanidhyaGupta-10", "_blank")}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold cursor-pointer  bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.921.43.37.814 1.102.814 2.222 0 1.604-.014 2.896-.014 3.287 0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </button>

        {/* Instagram Button */}
        <button
          onClick={() => window.open("https://www.instagram.com/sanidhyagupta10/", "_blank")}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold cursor-pointer bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.415a4.92 4.92 0 011.79 1.04 4.92 4.92 0 011.04 1.789c.176.46.36 1.26.415 2.43.058 1.267.069 1.647.069 4.851s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.43a4.902 4.902 0 01-1.04 1.79 4.902 4.902 0 01-1.789 1.04c-.46.176-1.26.36-2.43.415-1.267.058-1.647.069-4.851.069s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.415a4.902 4.902 0 01-1.79-1.04 4.902 4.902 0 01-1.04-1.789c-.176-.46-.36-1.26-.415-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.43a4.902 4.902 0 011.04-1.79 4.902 4.902 0 011.789-1.04c.46-.176 1.26-.36 2.43-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072 5.775.131 4.897.308 4.15.558a7.07 7.07 0 00-2.548 1.622A7.07 7.07 0 00.558 4.15C.308 4.897.131 5.775.072 7.052.013 8.332 0 8.737 0 12c0 3.263.013 3.668.072 4.948.059 1.277.236 2.155.486 2.902a7.05 7.05 0 001.622 2.548 7.05 7.05 0 002.548 1.622c.747.25 1.625.427 2.902.486C8.332 23.987 8.737 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.155-.236 2.902-.486a7.05 7.05 0 002.548-1.622 7.05 7.05 0 001.622-2.548c.25-.747.427-1.625.486-2.902.059-1.28.072-1.685.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.236-2.155-.486-2.902a7.07 7.07 0 00-1.622-2.548A7.07 7.07 0 0019.85.558c-.747-.25-1.625-.427-2.902-.486C15.668.013 15.263 0 12 0z" />
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
          Instagram
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
}
