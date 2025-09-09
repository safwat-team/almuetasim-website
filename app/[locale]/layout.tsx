import { getScopedI18n } from "@/locales/server";
import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const tGlobal = await getScopedI18n("global");

  return {
    title: {
      template: `%s | ${tGlobal("title")}`,
      default: tGlobal("title"),
    },
    description: tGlobal("description"),
  };
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  params: { locale: string };
  children: ReactNode;
}>) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} data-theme="light" translate="no">
      <body className={`${tajawal.className} bg-base-200`}>{children}</body>
    </html>
  );
}
