import Link from "next/link";
import type { ReactNode } from "react";
import RelatedPosts from "../RelatedPosts";
import BlackLotusCTA from "./BlackLotusCTA";
import PureHimalayanCTA from "./PureHimalayanCTA";
import BlogSidebar from "./BlogSidebar";
import QuizCTA from "./QuizCTA";

const BASE_URL = "https://www.shilajitprice.com";

export interface FaqItem {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

interface BlogPostLayoutProps {
  heading: ReactNode;
  description: string;
  tags: string[];
  publishedAt: string; // ISO "2026-04-01"
  updatedAt?: string;
  readingTimeMin: number;
  currentSlug: string;
  breadcrumbLabel: string;
  faqItems?: FaqItem[];
  ctaVariant?: "black-lotus" | "pure-himalayan";
  /** "card" = full quiz CTA card; "line" = single-line text CTA; undefined = none */
  quizCta?: "card" | "line";
  children: ReactNode;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostLayout({
  heading,
  description,
  tags,
  publishedAt,
  updatedAt,
  readingTimeMin,
  currentSlug,
  breadcrumbLabel,
  faqItems,
  ctaVariant = "black-lotus",
  quizCta,
  children,
}: BlogPostLayoutProps) {
  const postUrl = `${BASE_URL}/blog/${currentSlug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: breadcrumbLabel,
    description,
    url: postUrl,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@type": "Organization",
      name: "ShilajitPrice Research Team",
      url: `${BASE_URL}/methodology`,
    },
    publisher: {
      "@type": "Organization",
      name: "ShilajitPrice",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon`,
        width: 32,
        height: 32,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-intro"],
    },
    keywords: tags.join(", "),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: postUrl },
    ],
  };

  const faqSchema = faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems,
      }
    : null;

  return (
    <>
      {/* Auto-injected structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="flex-1 bg-[#E8F5EC]">
        {/* Article header */}
        <header className="border-b border-[#D1EDD8] py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb nav */}
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-2 text-xs text-[#7BA899] mb-6"
            >
              <Link href="/" className="hover:text-[#10B981] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#10B981] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#4A6358]">{breadcrumbLabel}</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1F14] leading-tight mb-4 max-w-4xl" style={{ fontFamily: "var(--font-jakarta)" }}>
              {heading}
            </h1>

            {/* Description */}
            <p className="article-intro text-base text-[#4A6358] leading-relaxed mb-6 max-w-2xl">
              {description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#7BA899]">
              <span>
                By{" "}
                <Link
                  href="/methodology"
                  className="text-[#4A6358] hover:text-[#10B981] transition-colors underline underline-offset-2 decoration-[#D1EDD8]"
                >
                  ShilajitPrice Research Team
                </Link>
              </span>
              <span>·</span>
              <span>
                Published{" "}
                <span className="text-[#4A6358]">{formatDate(publishedAt)}</span>
              </span>
              {updatedAt && updatedAt !== publishedAt && (
                <>
                  <span>·</span>
                  <span>
                    Updated{" "}
                    <span className="text-[#4A6358]">{formatDate(updatedAt)}</span>
                  </span>
                </>
              )}
              <span>·</span>
              <span>{readingTimeMin} min read</span>
            </div>
          </div>
        </header>

        {/* Body: article + sidebar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex gap-10 items-start">
            {/* Main article */}
            <article className="flex-1 min-w-0 space-y-10">
              {children}

              {/* Auto-injected: CTA */}
              {ctaVariant === "pure-himalayan" ? <PureHimalayanCTA /> : <BlackLotusCTA />}

              {/* Auto-injected: FAQ */}
              {faqItems && faqItems.length > 0 && (
                <section id="faq">
                  <h2 className="text-2xl font-extrabold text-[#0D1F14] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Frequently asked questions
                  </h2>
                  <div className="space-y-3">
                    {faqItems.map(({ name, acceptedAnswer }) => (
                      <div
                        key={name}
                        className="bg-white border-2 border-[#D1EDD8] rounded-2xl p-5 shadow-sm"
                      >
                        <h3 className="text-sm font-bold text-[#0D1F14] mb-2">{name}</h3>
                        <p className="text-sm text-[#4A6358] leading-relaxed">
                          {acceptedAnswer.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Auto-injected: Quiz CTA */}
              {quizCta === "card" && <QuizCTA />}
              {quizCta === "line" && (
                <p className="text-sm text-[#4A6358]">
                  Not sure which shilajit is right for you?{" "}
                  <a href="/quiz" className="text-[#10B981] hover:text-[#182B1F] font-semibold transition-colors underline underline-offset-2 decoration-[#9EC9AD]">
                    Take our free 60-second quiz →
                  </a>
                </p>
              )}

              {/* Auto-injected: Related posts */}
              <RelatedPosts currentSlug={currentSlug} />

              {/* Auto-injected: Back nav */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-[#4A6358] hover:text-[#10B981] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Blog
                </Link>
                <span className="text-[#D1EDD8]">·</span>
                <Link
                  href="/"
                  className="text-sm text-[#4A6358] hover:text-[#10B981] transition-colors"
                >
                  Compare All Prices →
                </Link>
              </div>
            </article>

            {/* Sticky sidebar — visible on xl screens */}
            <aside className="w-72 shrink-0 hidden xl:block sticky top-20">
              <BlogSidebar currentSlug={currentSlug} />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
