"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { archiveNavItems, insightsNavItems, navItems } from "@/lib/content";
import { common } from "@/lib/copy/common";
import { localizedPath, stripLocale, type Locale } from "@/lib/locale";

type NavSubItem = { href?: string; label: string };

function NavGroup({ id, label, items, locale, pathname, open, onToggle, onClose }: {
  id: string; label: string; items: NavSubItem[]; locale: Locale; pathname: string; open: boolean; onToggle: () => void; onClose: () => void;
}) {
  const isActive = (href?: string) => !!href && (pathname === href || pathname.startsWith(`${href}/`));
  const groupActive = items.some((item) => isActive(item.href));
  return <div className={open ? "nav-group is-open" : "nav-group"} onKeyDown={(event) => { if (event.key === "Escape") onClose(); }}>
    <button className={groupActive ? "nav-group__toggle active" : "nav-group__toggle"} type="button" aria-expanded={open} aria-haspopup="true" aria-controls={`${id}-submenu`} onClick={onToggle}>{label}<span className="nav-group__caret" aria-hidden="true" /></button>
    <div id={`${id}-submenu`} className="nav-sub">{items.map((sub) => sub.href
      ? <Link key={sub.label} className={isActive(sub.href) ? "active" : ""} href={localizedPath(locale, sub.href)} onClick={onClose}>{sub.label}</Link>
      : <span key={sub.label} className="nav-sub__soon" aria-disabled="true">{sub.label}</span>)}</div>
  </div>;
}

export function SiteHeader({ locale, showLanguage = true }: { locale: Locale; showLanguage?: boolean }) {
  const t = common[locale].header;
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const closeAll = () => { setOpen(false); setGroup(null); };
  const toggle = (id: string) => setGroup(group === id ? null : id);
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href={localizedPath(locale, "/")} aria-label={t.home} onClick={closeAll}><Image src="/jervis-labs-logo.png" alt="Jervis Labs" width={991} height={126} priority /></Link>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span className="sr-only">{t.menu}</span><span /><span /></button>
    <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"} aria-label={t.mainNav}>{navItems.map((item) => {
      const active = pathname === item.href || (item.href === "/product" && pathname.startsWith("/product/"));
      return <Fragment key={item.href}>
        <Link className={active ? "active" : ""} href={localizedPath(locale, item.href)} onClick={closeAll}>{item.label}{"alpha" in item && item.alpha && <em className="alpha-badge">ALPHA</em>}</Link>
        {item.href === "/shot-x" && <>
          <NavGroup id="web3" label="WEB3" items={archiveNavItems} locale={locale} pathname={pathname} open={group === "web3"} onToggle={() => toggle("web3")} onClose={closeAll} />
          <NavGroup id="insights" label="INSIGHTS" items={insightsNavItems} locale={locale} pathname={pathname} open={group === "insights"} onToggle={() => toggle("insights")} onClose={closeAll} />
        </>}
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
      {item.href === "/shot-x" && <>
        <div className="footer-sitemap__col"><span>WEB3</span>{archiveNavItems.map((sub) => <Link key={sub.href} className="footer-sitemap__sub" href={localizedPath(locale, sub.href)}>{sub.label}</Link>)}</div>
        <div className="footer-sitemap__col"><span>INSIGHTS</span>{insightsNavItems.map((sub) => sub.href
          ? <Link key={sub.label} className="footer-sitemap__sub" href={localizedPath(locale, sub.href)}>{sub.label}</Link>
          : <span key={sub.label} className="footer-sitemap__sub footer-sitemap__soon">{sub.label}</span>)}</div>
      </>}
    </Fragment>)}</nav></div><div className="container footer-bottom"><span>JervisLabs Co., Ltd.</span><span>© 2022–{new Date().getFullYear()} JervisLabs. All rights reserved.</span></div></footer>
  </>;
}
