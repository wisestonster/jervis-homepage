"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href="/" aria-label="Jervis Labs 홈" onClick={() => setOpen(false)}><Image src="/jervis-labs-logo.png" alt="Jervis Labs" width={991} height={126} priority /></Link>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span className="sr-only">메뉴 열기</span><span /><span /></button>
    <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"} aria-label="주요 메뉴">{navItems.map((item) => { const active = pathname === item.href || (item.href === "/product" && pathname.startsWith("/product/")); return <Link key={item.href} className={active ? "active" : ""} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>; })}</nav>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Link className="brand brand--footer" href="/"><Image src="/jervis-labs-logo.png" alt="Jervis Labs" width={991} height={126} /></Link><p>Enabling Blockchain & AI Transformation</p><p>블록체인과 AI 기술로 비즈니스의 새로운 가능성을 만듭니다.</p></div><div className="footer-nav">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></div><div className="container footer-bottom"><span>JervisLabs Co., Ltd.</span><span>© 2022 JervisLabs. All rights reserved.</span></div></footer>;
}
