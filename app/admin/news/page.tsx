import type { Metadata } from "next";
import { adminConfigured, isAdmin } from "@/lib/admin-auth";
import { listNews } from "@/lib/news-store";
import { AdminLogin, AdminNewsDashboard } from "./admin-news";

export const metadata: Metadata = {
  title: "NEWS 관리자",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const authenticated = await isAdmin();
  return (
    <section className="admin-page">
      <div className="container">
        {authenticated ? (
          <AdminNewsDashboard initialItems={await listNews()} />
        ) : (
          <AdminLogin configured={adminConfigured()} />
        )}
      </div>
    </section>
  );
}
