"use client";

import ThemeToggle from "../Dark/ThemeToggle";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="theme-bg theme-shadow theme-text p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">PORTAFOLIO</div>
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-4">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/proyectos" className="hover:underline">
              Proyectos
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="theme-accent rounded-lg p-2 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-4 border-t border-gray-300 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="py-2 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#projects"
              className="py-2 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="/contact"
              className="py-2 hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
