export type NewsKind = "news" | "paper" | "company" | "report" | "social";
export type NewsStatus = "draft" | "published";

export type NewsSource = {
  title: string;
  url: string;
};

export type ManagedNewsItem = {
  id: string;
  kind: NewsKind;
  category: string;
  title: string;
  summary: string;
  importance: string;
  impact: string;
  publishedAt: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  sources: NewsSource[];
  status: NewsStatus;
  pinned: boolean;
  collectedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateNewsInput = Pick<
  ManagedNewsItem,
  | "category"
  | "title"
  | "summary"
  | "publishedAt"
  | "source"
  | "sourceUrl"
  | "imageUrl"
  | "status"
  | "pinned"
>;

export const NEWS_KINDS: NewsKind[] = [
  "news",
  "paper",
  "company",
  "report",
  "social",
];
