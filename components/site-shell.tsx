"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { archiveNavItems, navItems } from "@/lib/content";
import { common } from "@/lib/copy/common";
import { localizedPath, stripLocale, type Locale } from "@/lib/locale";

export function SiteHeader({ locale, showLanguage = true }: { locale: Locale; showLanguage?: boolean }) {
  const t = common[locale].header;
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const [webOpen, setWebOpen] = useState(false);
  const closeAll = () => { setOpen(false); setWebOpen(false); };
  const webActive = archiveNavItems.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href={localizedPath(locale, "/")} aria-label={t.home} onClick={closeAll}><Image src="/jervis-labs-logo.png" alt="Jervis Labs" width={991} height={126} priority /></Link>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span className="sr-only">{t.menu}</span><span /><span /></button>
    <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"} aria-label={t.mainNav}>{navItems.map((item) => {
      const active = pathname === item.href || (item.href === "/product" && pathname.startsWith("/product/"));
      return <Fragment key={item.href}>
        <Link className={active ? "active" : ""} href={localizedPath(locale, item.href)} onClick={closeAll}>{item.label}{"alpha" in item && item.alpha && <em className="alpha-badge">ALPHA</em>}</Link>
        {item.href === "/shot-x" && <div className={webOpen ? "nav-group is-open" : "nav-group"} onKeyDown={(event) => { if (event.key === "Escape") setWebOpen(false); }}>
          <button className={webActive ? "nav-group__toggle active" : "nav-group__toggle"} type="button" aria-expanded={webOpen} aria-haspopup="true" aria-controls="web3-submenu" onClick={() => setWebOpen(!webOpen)}>WEB3<span className="nav-group__caret" aria-hidden="true" /></button>
          <div id="web3-submenu" className="nav-sub">{archiveNavItems.map((sub) => <Link key={sub.href} className={pathname === sub.href || pathname.startsWith(`${sub.href}/`) ? "active" : ""} href={localizedPath(locale, sub.href)} onClick={closeAll}>{sub.label}</Link>)}</div>
        </div>}
      </Fragment>;
    })}
      {showLanguage && <LanguageSwitcher locale={locale} label={t.language} />}
    </nav>
  </div></header>;
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = common[locale].footer;
  return <>
    <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Link className="brand brand--footer" href={localizedPath(locale, "/")}><Image src="/jervis-labs-logo.png" alt="Jervis Labs" width={991} height={126} /></Link><p>Predict. Create. Automate with AI.</p><p>{t.line2}</p></div><nav className="footer-sitemap" aria-label={t.sitemap}>{navItems.map((item) => <Fragment key={item.href}>
      <div className="footer-sitemap__col"><Link href={localizedPath(locale, item.href)}>{item.label}</Link></div>
      {item.href === "/shot-x" && <div className="footer-sitemap__col"><span>WEB3</span>{archiveNavItems.map((sub) => <Link key={sub.href} className="footer-sitemap__sub" href={localizedPath(locale, sub.href)}>{sub.label}</Link>)}</div>}
    </Fragment>)}</nav></div><div className="container footer-bottom"><span>JervisLabs Co., Ltd.</span><span>© 2022–{new Date().getFullYear()} JervisLabs. All rights reserved.</span></div></footer>
  </>;
}
