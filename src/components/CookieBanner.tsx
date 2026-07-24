"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldAlert, X } from "lucide-react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname ? pathname.startsWith("/en") : false;

  useEffect(() => {
    // Check if user has already accepted cookies
    const isAccepted = localStorage.getItem("cookieConsentAccepted");
    if (!isAccepted) {
      // Delay showing the banner slightly for better UX/transition
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsentAccepted", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.iconWrapper}>
          <ShieldAlert size={20} className="text-gold" />
        </div>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            {isEn ? (
              <>
                By continuing to use this website, you consent to the use of cookies and personal data processing in accordance with our{" "}
                <Link href="/en/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
                .
              </>
            ) : (
              <>
                Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie и обработкой персональных данных согласно нашей{" "}
                <Link href="/privacy" className={styles.link}>
                  Политике конфиденциальности
                </Link>
                .
              </>
            )}
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={acceptCookies} className={`btn btn-primary ${styles.btnSmall}`}>
            {isEn ? "Agree" : "Согласен"}
          </button>
          <button onClick={() => setIsOpen(false)} className={styles.closeBtn} aria-label={isEn ? "Close" : "Закрыть"}>
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
