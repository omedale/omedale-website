"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteData } from "../../data/site";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/quotes", label: "Quotes" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__row">
          <Link href="/" className="site-mark">
            <span className="site-mark__eyebrow">Personal website</span>
            <span className="site-mark__name">{siteData.name}</span>
          </Link>

          <button
            type="button"
            className="site-nav-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav__link ${isActive ? "site-nav__link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
