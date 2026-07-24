"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinksRu = [
  { href: "/", label: "Главная" },
  { href: "/portfolio", label: "Личное пространство" },
  { href: "/partners", label: "Партнеры" },
  { href: "/contacts", label: "Контакты" },
  { href: "/blog", label: "Блог" },
];

const navLinksEn = [
  { href: "/en", label: "Home" },
  { href: "/en/portfolio", label: "Profile" },
  { href: "/en/partners", label: "Partners" },
  { href: "/en/contacts", label: "Contacts" },
  { href: "/en/blog", label: "Blog" },
];

const socialLinks = [
  {
    href: "https://t.me/radun88",
    title: "Telegram",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.648 6.648c-.193 2.042-1.032 7.175-1.459 9.45-.18.962-.536 1.284-.877 1.316-.743.068-1.31-.492-2.032-.965-1.128-.738-1.764-1.194-2.856-1.912-1.266-.833-.446-1.296.276-2.035.189-.193 3.466-3.175 3.53-3.446.009-.04.018-.193-.073-.274-.091-.081-.224-.053-.32-.031-.136.031-2.302 1.458-6.495 4.282-.613.419-1.171.625-1.674.613-.551-.013-1.61-.312-2.404-.572-.972-.317-1.743-.485-1.676-1.023.035-.281.423-.568 1.166-.864 4.585-1.996 7.65-3.323 9.184-3.96 4.37-1.81 5.284-2.127 5.878-2.136.13 0 .42.03.61.185.16.13.205.306.227.433.023.125.053.408.032.637z"/>
      </svg>
    ),
  },
  {
    href: "https://vk.com/radun88",
    title: "VKontakte",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.785 16.241s.281-.031.426-.188c.133-.145.129-.418.129-.418s-.019-1.276.574-1.464c.584-.184 1.333 1.233 2.127 1.778.601.414 1.057.323 1.057.323l2.124-.03s1.111-.07.584-.942c-.043-.071-.306-.644-1.575-1.822-1.327-1.232-1.149-1.032.449-3.16.973-1.297 1.361-2.09 1.24-2.429-.115-.323-.824-.238-.824-.238l-2.391.015s-.178-.025-.309.053c-.128.077-.21.258-.21.258s-.379 1.008-.884 1.867c-1.066 1.813-1.493 1.909-1.667 1.797-.406-.262-.305-1.055-.305-1.618 0-1.759.267-2.493-.521-2.683-.261-.063-.453-.104-1.121-.111-.857-.009-1.582.003-1.992.203-.273.133-.484.43-.355.447.16.021.521.098.713.359.248.336.24 1.09.24 1.09s.141 2.071-.328 2.329c-.322.177-.764-.184-1.715-1.829-.487-.844-.854-1.778-.854-1.778s-.071-.173-.2-.266c-.156-.112-.374-.148-.374-.148l-2.272.015s-.341.01-.466.159c-.111.133-.009.407-.009.407s1.779 4.161 3.793 6.259c1.848 1.923 3.945 1.797 3.945 1.797h.949z"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/radun180",
    title: "Instagram",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.756 5.756 0 0 1 22 7.75v8.5A5.756 5.756 0 0 1 16.25 22h-8.5A5.756 5.756 0 0 1 2 16.25v-8.5A5.756 5.756 0 0 1 7.75 2zm0 1.5A4.255 4.255 0 0 0 3.5 7.75v8.5a4.255 4.255 0 0 0 4.25 4.25h8.5a4.255 4.255 0 0 0 4.25-4.25v-8.5a4.255 4.255 0 0 0-4.25-4.25h-8.5zm8.938 1.125a1.188 1.188 0 1 1 0 2.375 1.188 1.188 0 0 1 0-2.375zM12 6.5A5.5 5.5 0 1 1 6.5 12 5.506 5.506 0 0 1 12 6.5zm0 1.5A4 4 0 1 0 16 12a4.004 4.004 0 0 0-4-4z"/>
      </svg>
    ),
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  const navLinks = isEn ? navLinksEn : navLinksRu;

  // Path translations for Language Switcher
  const ruPath = pathname.startsWith("/en") ? (pathname.replace(/^\/en/, "") || "/") : pathname;
  const enPath = pathname.startsWith("/en") ? pathname : (`/en${pathname === "/" ? "" : pathname}`);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <Link href={isEn ? "/en" : "/"} className={styles.logo}>
            <div className={styles.logoFlagWrapper}>
              <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoFlag}>
                <clipPath id="shieldClipDesktop">
                  <path d="M2 4C2 4 2 16 14 28C26 16 26 4 26 4H2Z" />
                </clipPath>
                <g clipPath="url(#shieldClipDesktop)">
                  <rect x="0" y="0" width="28" height="11" fill="#FFFFFF" />
                  <rect x="0" y="11" width="28" height="9" fill="#0039A6" />
                  <rect x="0" y="20" width="28" height="12" fill="#D52B1E" />
                </g>
                <path d="M2 4C2 4 2 16 14 28C26 16 26 4 26 4H2Z" stroke="#E2C974" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                
                {/* Gold Double-headed Russian Eagle Silhouette */}
                <path d="M14 7.5c-.3 0-.5.2-.6.4-.1-.2-.3-.4-.6-.4-.5 0-.9.4-.9.9s.3.9.6 1.1l-.5 2-.8-.4-.5-1.3c.2-.1.3-.3.3-.5 0-.5-.4-.9-.9-.9s-.9.4-.9.9c0 .4.2.7.5.8l-.9 2.2c-.2-.1-.4-.1-.5.1-.2.2-.2.5.1.7l1.1.6.2 2 1.2 1.2v1.6h.8v1.2h-.8v.8h1.6v1.2h1.6v-1.2h1.6v-.8h-.8v-1.2h.8v-1.6l1.2-1.2.2-2 1.1-.6c.3-.2.3-.5.1-.7-.1-.2-.3-.2-.5-.1l-.9-2.2c.3-.1.5-.4.5-.8 0-.5-.4-.9-.9-.9s-.9.4-.9.9c0 .2.1.4.3.5l-.5 1.3-.8.4-.5-2c.3-.2.6-.5.6-1.1 0-.5-.4-.9-.9-.9z" fill="#FFDF00" />
                <path d="M14 5.5l1 1.2h-2l1-1.2zM11.5 6.7l.8 1h-1.6l.8-1zM16.5 6.7l.8 1H15.7l.8-1z" fill="#FFDF00" />
                <path d="M12.5 11s-2 1-3 2.5c-.8 1.2-1 2.5-1 3.5 1.2-.4 2.2-1.2 3-2.5V11zM15.5 11s2 1 3 2.5c.8 1.2 1 2.5 1 3.5-1.2-.4-2.2-1.2-3-2.5V11z" fill="#FFDF00" />
              </svg>
              <span className={styles.logoText}>RADUN</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Action / Mobile Burger Button */}
          <div className={styles.navActions}>
            {/* Desktop Language Selector */}
            <div className={styles.langSelector}>
              <Link 
                href={ruPath} 
                className={`${styles.langBtn} ${!isEn ? styles.langActive : ""}`}
              >
                RU
              </Link>
              <span className={styles.langDivider}>|</span>
              <Link 
                href={enPath} 
                className={`${styles.langBtn} ${isEn ? styles.langActive : ""}`}
              >
                EN
              </Link>
            </div>

            <Link href={isEn ? "/en/contacts" : "/contacts"} className={`${styles.desktopCta} btn btn-primary`}>
              {isEn ? "Consultation" : "Консультация"}
            </Link>
            
            <button
              className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={isEn ? "Menu" : "Меню"}
              aria-expanded={menuOpen}
            >
              <div className={styles.burgerLines}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.burgerText}>{isEn ? "Menu" : "Меню"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for Side Menu */}
      <div 
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`} 
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Sliding Menu (for Mobile) */}
      <div className={`${styles.sideMenu} ${menuOpen ? styles.sideMenuOpen : ""}`}>
        <div className={styles.sideMenuHeader}>
          <div className={styles.logoFlagWrapper}>
            <svg width="24" height="28" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoFlag}>
              <clipPath id="shieldClipMobile">
                <path d="M2 4C2 4 2 16 14 28C26 16 26 4 26 4H2Z" />
              </clipPath>
              <g clipPath="url(#shieldClipMobile)">
                <rect x="0" y="0" width="28" height="11" fill="#FFFFFF" />
                <rect x="0" y="11" width="28" height="9" fill="#0039A6" />
                <rect x="0" y="20" width="28" height="12" fill="#D52B1E" />
              </g>
              <path d="M2 4C2 4 2 16 14 28C26 16 26 4 26 4H2Z" stroke="#E2C974" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
              
              {/* Gold Double-headed Russian Eagle Silhouette */}
              <path d="M14 7.5c-.3 0-.5.2-.6.4-.1-.2-.3-.4-.6-.4-.5 0-.9.4-.9.9s.3.9.6 1.1l-.5 2-.8-.4-.5-1.3c.2-.1.3-.3.3-.5 0-.5-.4-.9-.9-.9s-.9.4-.9.9c0 .4.2.7.5.8l-.9 2.2c-.2-.1-.4-.1-.5.1-.2.2-.2.5.1.7l1.1.6.2 2 1.2 1.2v1.6h.8v1.2h-.8v.8h1.6v1.2h1.6v-1.2h1.6v-.8h-.8v-1.2h.8v-1.6l1.2-1.2.2-2 1.1-.6c.3-.2.3-.5.1-.7-.1-.2-.3-.2-.5-.1l-.9-2.2c.3-.1.5-.4.5-.8 0-.5-.4-.9-.9-.9s-.9.4-.9.9c0 .2.1.4.3.5l-.5 1.3-.8.4-.5-2c.3-.2.6-.5.6-1.1 0-.5-.4-.9-.9-.9z" fill="#FFDF00" />
              <path d="M14 5.5l1 1.2h-2l1-1.2zM11.5 6.7l.8 1h-1.6l.8-1zM16.5 6.7l.8 1H15.7l.8-1z" fill="#FFDF00" />
              <path d="M12.5 11s-2 1-3 2.5c-.8 1.2-1 2.5-1 3.5 1.2-.4 2.2-1.2 3-2.5V11zM15.5 11s2 1 3 2.5c.8 1.2 1 2.5 1 3.5-1.2-.4-2.2-1.2-3-2.5V11z" fill="#FFDF00" />
            </svg>
            <span className={styles.logoText} style={{ fontSize: "24px" }}>RADUN</span>
          </div>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
            {isEn ? "Close" : "Закрыть"}
          </button>
        </div>
        
        <nav className={styles.sideNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.sideNavLink} ${pathname === link.href ? styles.active : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.sideMenuFooter}>
          {/* Mobile Language Selector inside side menu */}
          <div className={styles.langSelector} style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            <Link 
              href={ruPath} 
              className={`${styles.langBtn} ${!isEn ? styles.langActive : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              RU
            </Link>
            <span className={styles.langDivider}>|</span>
            <Link 
              href={enPath} 
              className={`${styles.langBtn} ${isEn ? styles.langActive : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              EN
            </Link>
          </div>

          <Link href={isEn ? "/en/contacts" : "/contacts"} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
            {isEn ? "Consultation" : "Консультация"}
          </Link>
          <div className={styles.socials} style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                title={social.title}
                aria-label={social.title}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

