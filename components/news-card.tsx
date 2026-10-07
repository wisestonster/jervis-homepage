"use client";

import { useState } from "react";
import { Arrow } from "@/components/arrow";
import { common } from "@/lib/copy/common";
import type { Locale } from "@/lib/locale";
import type { ManagedNewsItem } from "@/lib/news-types";

export function NewsCard({
  item,
  locale,
  compact = false,
}: {
  item: ManagedNewsItem;
  locale: Locale;
  compact?: boolean;
}) {
  const t = common[locale].news;
  const [imageFailed, setImageFailed] = useState(false);
  const image = item.imageUrl && !imageFailed ? item.imageUrl : "/favicon.svg";
  return (
    <article className="news-card">
      <div className="news-card__body news-card__heading">
        <div className="news-meta">
          <span>{item.category}</span>
          <b>{t.kinds[item.kind]}</b>
          <time dateTime={item.publishedAt}>{item.publishedAt}</time>
        </div>
        {compact ? <h3>{item.title}</h3> : <h2>{item.title}</h2>}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={item.imageUrl ? t.imageAlt(item.title) : "Jervis Labs"}
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
      <div className="news-card__body news-card__content">
        <p>{item.summary}</p>
        {!compact && (
          <>
            {(item.importance || item.impact) && (
              <dl className="news-insights">
                {item.importance && <div><dt>{t.why}</dt><dd>{item.importance}</dd></div>}
                {item.impact && <div><dt>{t.impact}</dt><dd>{item.impact}</dd></div>}
              </dl>
            )}
            {item.sources.length > 1 && (
              <details>
                <summary>{t.cross(item.sources.length)}</summary>
                <ul>
                  {item.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </>
        )}
        <a
          className="news-source"
          href={item.sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.original} <Arrow />
          <small>{item.source}</small>
        </a>
      </div>
    </article>
  );
}
