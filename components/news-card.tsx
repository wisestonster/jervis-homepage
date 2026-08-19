"use client";

import { useState } from "react";
import { Arrow } from "@/components/page-ui";
import type { ManagedNewsItem } from "@/lib/news-types";

const kindLabels = {
  news: "뉴스",
  paper: "논문",
  company: "기업 발표",
  report: "보고서",
  social: "SNS",
};

export function NewsCard({
  item,
  compact = false,
}: {
  item: ManagedNewsItem;
  compact?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const image = item.imageUrl && !imageFailed ? item.imageUrl : "/favicon.svg";
  return (
    <article className="news-card">
      <div className="news-card__body news-card__heading">
        <div className="news-meta">
          <span>{item.category}</span>
          <b>{kindLabels[item.kind]}</b>
          <time dateTime={item.publishedAt}>{item.publishedAt}</time>
        </div>
        {compact ? <h3>{item.title}</h3> : <h2>{item.title}</h2>}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={item.imageUrl ? `${item.title} 관련 이미지` : "Jervis Labs"}
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
      <div className="news-card__body news-card__content">
        <p>{item.summary}</p>
        {!compact && (
          <>
            {(item.importance || item.impact) && (
              <dl className="news-insights">
                {item.importance && <div><dt>왜 중요한가</dt><dd>{item.importance}</dd></div>}
                {item.impact && <div><dt>실무 영향</dt><dd>{item.impact}</dd></div>}
              </dl>
            )}
            {item.sources.length > 1 && (
              <details>
                <summary>교차 검증 출처 {item.sources.length}개</summary>
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
          원문 보기 <Arrow />
          <small>{item.source}</small>
        </a>
      </div>
    </article>
  );
}
