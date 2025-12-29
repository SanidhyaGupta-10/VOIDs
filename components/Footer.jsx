"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "../app/constants";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2023); // Default or initial year

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-black border-t border-neutral-800 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {FOOTER_LINKS.map((section) => (
          <div key={section.title}>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-indigo-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        © {currentYear} VOID. All rights reserved.
      </div>
    </footer>
  );
}
