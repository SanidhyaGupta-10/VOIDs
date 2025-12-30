"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { NAV_LINKS } from "../app/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-neutral-800">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-white">
          VOID
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-neutral-300">
              {link.label}
            </Link>
          ))}

          {status !== "loading" &&
            (session ? (
              <button onClick={signOut} className="border px-4 py-2 rounded">
                Logout
              </button>
            ) : (
              <button onClick={signIn} className="bg-indigo-600 px-4 py-2 rounded">
                Sign In
              </button>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-300"
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-300"
              onClick={() => setMenuOpen(false)} // close menu on link click
            >
              {link.label}
            </Link>
          ))}

          {status !== "loading" &&
            (session ? (
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="border px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  signIn();
                  setMenuOpen(false);
                }}
                className="bg-indigo-600 px-4 py-2 rounded"
              >
                Sign In
              </button>
            ))}
        </div>
      )}
    </header>
  );
}
