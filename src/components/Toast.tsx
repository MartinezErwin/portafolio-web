"use client";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "loading";
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (isVisible && type !== "loading") {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, type, onClose]);

  if (!isVisible) return null;

  const icons = {
    success: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    error: (
      <svg
        className="h-5 w-5"
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
    ),
    loading: (
      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
    ),
  };

  const styles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    loading: "bg-blue-500 text-white",
  };

  return (
    <div className="animate-slide-in fixed top-4 right-4 z-50">
      <div
        className={`flex max-w-md items-center gap-3 rounded-lg px-6 py-4 shadow-lg ${styles[type]} transition-all duration-300`}
      >
        <div className="flex-shrink-0">{icons[type]}</div>
        <p className="text-sm font-medium">{message}</p>
        {type !== "loading" && (
          <button
            onClick={onClose}
            className="ml-2 rounded-full p-1 transition-colors hover:bg-black/10"
          >
            <svg
              className="h-4 w-4"
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
          </button>
        )}
      </div>
    </div>
  );
}
