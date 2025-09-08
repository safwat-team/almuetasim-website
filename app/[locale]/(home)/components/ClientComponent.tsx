"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/stores/themeStore";

const ClientComponent = () => {
  const { fetchTheme } = useThemeStore();

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  return (
    <section className="hero bg-gradient-to-r from-primary to-secondary text-white animate-fade-in-up">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            مرحبا بك في مودرن شوب
          </h1>
          <p className="py-6 text-lg animate-fade-in-up animation-delay-200">
            اكتشف أحدث المنتجات والعروض الرائعة في متجرنا الإلكتروني
          </p>
          <button className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up animation-delay-400">
            تسوق الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientComponent;
