"use client";

import { useState } from "react";
import type { ManagedNewsItem } from "@/lib/news-types";

async function api(url: string, options?: RequestInit) {
  const response = await fetch(url, {
    ...options,
    headers: { "content-type": "application/json", ...options?.headers },
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || "요청을 처리하지 못했습니다.");
  return body;
}

function today() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date());
}

type CardForm = {
  category: string;
  title: string;
  imageUrl: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  visible: boolean;
  pinned: boolean;
};

const emptyCard = (): CardForm => ({
  category: "NEWS",
  title: "",
  imageUrl: "",
  summary: "",
  source: "",
  sourceUrl: "",
  publishedAt: today(),
  visible: false,
  pinned: false,
});

function itemToForm(item: ManagedNewsItem): CardForm {
  return {
    category: item.category,
    title: item.title,
    imageUrl: item.imageUrl,
    summary: item.summary,
    source: item.source,
    sourceUrl: item.sourceUrl,
    publishedAt: item.publishedAt,
    visible: item.status === "published",
    pinned: item.pinned,
  };
}

export function AdminLogin({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(configured ? "" : "ADMIN_PASSWORD와 ADMIN_SESSION_SECRET을 먼저 설정하세요.");
  const [loading, setLoading] = useState(false);
  return (
    <div className="admin-login">
      <h1>NEWS 관리자</h1>
      <p>뉴스를 등록하고 노출 여부를 관리합니다.</p>
      <form onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");
        try {
          await api("/api/admin/login", { method: "POST", body: JSON.stringify({ password }) });
          location.reload();
        } catch (error) {
          setMessage(error instanceof Error ? error.message : "로그인 실패");
        } finally {
          setLoading(false);
        }
      }}>
        <label>관리자 비밀번호<input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} disabled={!configured} /></label>
        <button className="button" disabled={!configured || loading}>{loading ? "확인 중…" : "로그인"}</button>
        {message && <p className="admin-message admin-message--error">{message}</p>}
      </form>
    </div>
  );
}

function ToggleSwitch({ checked, onChange, disabled = false, onLabel, offLabel }: { checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean; onLabel: string; offLabel: string }) {
  return (
    <label className="visibility-switch">
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
      <span aria-hidden="true"><i /></span>
      <b>{checked ? onLabel : offLabel}</b>
    </label>
  );
}

function VisibilitySwitch({ checked, onChange, disabled = false }: { checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean }) {
  return <ToggleSwitch checked={checked} onChange={onChange} disabled={disabled} onLabel="노출" offLabel="비노출" />;
}

function CardFields({ value, onChange }: { value: CardForm; onChange: (next: CardForm) => void }) {
  const [metadataBusy, setMetadataBusy] = useState(false);
  const [metadataMessage, setMetadataMessage] = useState("");
  const update = (key: keyof CardForm, fieldValue: string | boolean) => onChange({ ...value, [key]: fieldValue });
  const fetchMetadata = async () => {
    if (!value.sourceUrl.trim()) {
      setMetadataMessage("뉴스 원문 URL을 먼저 입력해 주세요.");
      return;
    }
    setMetadataBusy(true);
    setMetadataMessage("");
    try {
      const body = await api("/api/admin/news/metadata", { method: "POST", body: JSON.stringify({ url: value.sourceUrl }) });
      const metadata = body.metadata as Partial<CardForm>;
      onChange({
        ...value,
        title: metadata.title || value.title,
        summary: metadata.summary || value.summary,
        imageUrl: metadata.imageUrl || value.imageUrl,
        source: metadata.source || value.source,
        sourceUrl: metadata.sourceUrl || value.sourceUrl,
        publishedAt: metadata.publishedAt || value.publishedAt,
        category: metadata.category || value.category,
      });
      setMetadataMessage("원문 메타데이터를 입력 항목에 반영했습니다.");
    } catch (error) {
      setMetadataMessage(error instanceof Error ? error.message : "정보를 가져오지 못했습니다.");
    } finally {
      setMetadataBusy(false);
    }
  };
  return (
    <div className="admin-form-grid">
      <div className="admin-wide admin-url-fetch">
        <label>뉴스 원문 URL<input required type="url" value={value.sourceUrl} onChange={(event) => update("sourceUrl", event.target.value)} placeholder="https://example.com/original-article" /></label>
        <button type="button" className="button button--secondary" disabled={metadataBusy} onClick={fetchMetadata}>{metadataBusy ? "가져오는 중…" : "정보 가져오기"}</button>
        {metadataMessage && <p>{metadataMessage}</p>}
      </div>
      <label>카테고리<input value={value.category} maxLength={30} onChange={(event) => update("category", event.target.value)} placeholder="예: RWA" /></label>
      <label>게시일<input type="date" value={value.publishedAt} onChange={(event) => update("publishedAt", event.target.value)} /></label>
      <div className="admin-visible-field"><span>공개 상태</span><VisibilitySwitch checked={value.visible} onChange={(checked) => update("visible", checked)} /></div>
      <div className="admin-visible-field"><span>고정 노출</span><ToggleSwitch checked={value.pinned} onChange={(checked) => update("pinned", checked)} onLabel="고정" offLabel="고정 안함" /></div>
      <label className="admin-wide">카드 제목<input required value={value.title} maxLength={200} onChange={(event) => update("title", event.target.value)} /></label>
      <label className="admin-wide">카드 이미지 URL<input type="url" value={value.imageUrl} onChange={(event) => update("imageUrl", event.target.value)} placeholder="https://example.com/image.jpg" /></label>
      <label className="admin-wide">카드 내용<textarea required rows={6} value={value.summary} maxLength={5000} onChange={(event) => update("summary", event.target.value)} /></label>
      <label className="admin-wide">원문보기 표시 내용<input required value={value.source} maxLength={100} onChange={(event) => update("source", event.target.value)} placeholder="예: 금융위원회 보도자료" /></label>
    </div>
  );
}

function NewsForm({ item, onSaved, onCancel }: { item?: ManagedNewsItem; onSaved: (item: ManagedNewsItem) => void; onCancel: () => void }) {
  const [form, setForm] = useState<CardForm>(() => item ? itemToForm(item) : emptyCard());
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const save = async () => {
    setBusy(true);
    setMessage("");
    try {
      const body = await api(item ? `/api/admin/news/${item.id}` : "/api/admin/news", {
        method: item ? "PATCH" : "POST",
        body: JSON.stringify(form),
      });
      onSaved(body.item);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "저장하지 못했습니다.");
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="admin-create-panel">
      <header><div><h2>{item ? "뉴스 수정" : "뉴스 등록"}</h2><p>원문 URL의 메타데이터를 불러온 뒤 필요한 내용을 직접 수정할 수 있습니다.</p></div></header>
      <CardFields value={form} onChange={setForm} />
      <footer><span>{message}</span><button type="button" className="button button--secondary" disabled={busy} onClick={onCancel}>취소</button><button type="button" className="button" disabled={busy} onClick={save}>{busy ? "저장 중…" : "저장"}</button></footer>
    </section>
  );
}

export function AdminNewsDashboard({ initialItems }: { initialItems: ManagedNewsItem[] }) {
  const [items, setItems] = useState(initialItems);
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const editingItem = items.find((item) => item.id === editingId);
  const upsert = (changed: ManagedNewsItem) => {
    setItems((current) => current.some((item) => item.id === changed.id)
      ? current.map((item) => item.id === changed.id ? changed : item)
      : [changed, ...current]);
    setCreating(false);
    setEditingId(null);
  };
  const toggleVisibility = async (item: ManagedNewsItem, visible: boolean) => {
    setBusyId(item.id);
    try {
      const body = await api(`/api/admin/news/${item.id}`, { method: "PATCH", body: JSON.stringify({ ...itemToForm(item), visible }) });
      setItems((current) => current.map((entry) => entry.id === body.item.id ? body.item : entry));
    } catch (error) {
      alert(error instanceof Error ? error.message : "노출 상태를 변경하지 못했습니다.");
    } finally {
      setBusyId(null);
    }
  };
  const togglePin = async (item: ManagedNewsItem, pinned: boolean) => {
    setBusyId(item.id);
    try {
      const body = await api(`/api/admin/news/${item.id}`, { method: "PATCH", body: JSON.stringify({ ...itemToForm(item), pinned }) });
      setItems((current) => current.map((entry) => entry.id === body.item.id ? body.item : entry));
    } catch (error) {
      alert(error instanceof Error ? error.message : "고정 상태를 변경하지 못했습니다.");
    } finally {
      setBusyId(null);
    }
  };
  const remove = async (item: ManagedNewsItem) => {
    if (!confirm(`“${item.title}” 뉴스를 삭제할까요?`)) return;
    setBusyId(item.id);
    try {
      await api(`/api/admin/news/${item.id}`, { method: "DELETE" });
      setItems((current) => current.filter((entry) => entry.id !== item.id));
    } catch (error) {
      alert(error instanceof Error ? error.message : "삭제하지 못했습니다.");
    } finally {
      setBusyId(null);
    }
  };
  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__top">
        <div><p className="eyebrow">CONTENT MANAGEMENT</p><h1>NEWS 관리자</h1><p>게시판 목록에서 뉴스를 추가·수정·삭제하고 노출 여부를 관리하세요.</p></div>
        <div className="admin-actions"><button className="button" onClick={() => { setCreating(true); setEditingId(null); }}>뉴스 등록</button><button className="button button--secondary" onClick={async () => { await api("/api/admin/logout", { method: "POST" }); location.reload(); }}>로그아웃</button></div>
      </header>

      {creating && <NewsForm onSaved={upsert} onCancel={() => setCreating(false)} />}
      {editingItem && <NewsForm key={editingItem.id} item={editingItem} onSaved={upsert} onCancel={() => setEditingId(null)} />}

      <section className="admin-board">
        <div className="admin-board__summary"><strong>뉴스 목록</strong><span>총 {items.length}건</span></div>
        <div className="admin-board__head" aria-hidden="true"><span>번호</span><span>제목</span><span>게시일</span><span>노출 여부</span><span>관리</span></div>
        <div className="admin-board__body">
          {items.map((item, index) => (
            <article className="admin-board__row" key={item.id}>
              <span className="admin-board__number">{items.length - index}</span>
              <div className="admin-board__title"><small>{item.category}</small><strong>{item.pinned && <span className="admin-badge admin-badge--pinned">고정</span>}{item.title}</strong><a href={item.sourceUrl} target="_blank" rel="noreferrer">원문 보기</a></div>
              <time dateTime={item.publishedAt}>{item.publishedAt}</time>
              <VisibilitySwitch checked={item.status === "published"} disabled={busyId === item.id} onChange={(checked) => toggleVisibility(item, checked)} />
              <div className="admin-board__actions"><button type="button" disabled={busyId === item.id} onClick={() => togglePin(item, !item.pinned)}>{item.pinned ? "고정 해제" : "고정"}</button><button type="button" disabled={busyId === item.id} onClick={() => { setEditingId(item.id); setCreating(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>수정</button><button type="button" className="is-delete" disabled={busyId === item.id} onClick={() => remove(item)}>삭제</button></div>
            </article>
          ))}
          {items.length === 0 && <p className="admin-empty">등록된 뉴스가 없습니다.</p>}
        </div>
      </section>
    </div>
  );
}
