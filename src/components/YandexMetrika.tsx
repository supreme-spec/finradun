"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const YANDEX_METRIKA_ID = 102611092;

declare global {
  interface Window {
    ym?: (id: number, action: string, url: string) => void;
  }
}

export default function YandexMetrika() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      const url = window.location.pathname + window.location.search;
      window.ym(YANDEX_METRIKA_ID, "hit", url);
    }
  }, [pathname]);

  return null;
}
