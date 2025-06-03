"use client";
import Link from "next/link";
import Titles from "@/components/Util/Titles";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        // Quité la barra final
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Mensaje enviado correctamente");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Hubo un error al enviar el mensaje");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Error de red al enviar mensaje");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 sm:px-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-center [font-family:var(--font-jomhuria)] text-5xl font-normal sm:text-6xl lg:text-8xl">
          CONTACTO
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-gray-800">Email</h3>
              <Link
                href="mailto:plazaerwin41@gmail.com"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                plazaerwin41@gmail.com
              </Link>
            </div>
          </div>

          <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-gray-800">Teléfono</h3>
              <Link
                href="tel:+524641123632"
                className="text-sm text-gray-600 hover:text-green-600"
              >
                +52 464 112 3632
              </Link>
            </div>
          </div>

          <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <svg
                  className="h-8 w-8 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-gray-800">GitHub</h3>
              <Link
                href="https://github.com/ErwinPlaza064"
                target="_blank"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                /ErwinPlaza064
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-gray-50 p-8 shadow-xl sm:p-12">
          <div className="mx-auto max-w-2xl">
            <Titles title="Contactame" />

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <textarea
                name="mensaje"
                rows={6}
                placeholder="Describe tu proyecto o idea..."
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border-2 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                required
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-2xl bg-black px-12 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
