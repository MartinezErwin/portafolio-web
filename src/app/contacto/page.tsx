"use client";
import Toast from "@/components/Toast";
import { useState } from "react";
import CardContact from "@/components/Ui/CardContact";

interface ToastState {
  isVisible: boolean;
  message: string;
  type: "success" | "error" | "loading";
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message: string, type: ToastState["type"]) => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    showToast("Enviando mensaje...", "loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        showToast(
          "✅ ¡Mensaje enviado correctamente! Te responderé pronto.",
          "success",
        );
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        showToast(
          `❌ Error: ${data.error || "Hubo un problema al enviar el mensaje"}`,
          "error",
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast(
        "❌ Error de conexión. Verifica tu internet e intenta de nuevo.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      <div className="flex flex-col items-center justify-center px-4 py-4 sm:px-8">
        <div className="w-full max-w-4xl">
          <h1 className="theme-text text-center [font-family:var(--font-jomhuria)] text-5xl font-normal sm:text-6xl lg:text-8xl">
            CONTACTO
          </h1>
          <CardContact />

          <div className="d mx-auto mt-8 w-full max-w-md rounded-2xl bg-gray-200 px-4 py-6 text-black shadow-lg sm:mt-12 sm:max-w-lg lg:mt-16 lg:max-w-6xl lg:px-8 dark:bg-white/10 dark:shadow-white/10">
            <div className="mx-auto max-w-2xl">
              <h3 className="lg:theme-text text-center [font-family:var(--font-jomhuria)] text-5xl font-normal text-black sm:text-6xl lg:text-6xl lg:text-black">
                CONTACTAME
              </h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:placeholder-gray-400"
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
                      disabled={isSubmitting}
                      className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                <textarea
                  name="mensaje"
                  rows={6}
                  placeholder="Escribe tu mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:placeholder-gray-400"
                  required
                />

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center gap-3 rounded-2xl px-12 py-4 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
