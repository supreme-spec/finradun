#!/usr/bin/env python3
"""
SEO GEO Audit for finradun.ru
Checks all page.tsx files for:
  - Title length (50-60 chars ideal, max 70)
  - Description length (140-160 chars ideal, min 120, max 160)
  - H1 presence
  - og:image presence
  - Images without alt
  - Article/Person Schema
  - Author/Date Schema
"""

import re
import os
import json
from pathlib import Path

PROJECT_DIR = Path(__file__).parent
SRC_DIR = PROJECT_DIR / "src" / "app"

RESULTS = []

def find_page_files():
    """Find all page.tsx files."""
    pages = []
    for root, dirs, files in os.walk(SRC_DIR):
        for f in files:
            if f == "page.tsx":
                pages.append(os.path.join(root, f))
    return sorted(pages)

def get_route(filepath):
    """Convert file path to URL route."""
    rel = os.path.relpath(filepath, SRC_DIR)
    # Remove page.tsx
    rel = rel.replace("page.tsx", "").rstrip("/")
    if not rel:
        rel = "/"
    else:
        rel = "/" + rel
    # Handle dynamic routes
    rel = re.sub(r'\[([^\]]+)\]', ':slug', rel)
    return rel

def extract_metadata(content, filepath):
    """Extract SEO metadata from a page.tsx file."""
    route = get_route(filepath)
    issues = []
    recommendations = []

    # --- Title ---
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content)
    title = title_match.group(1) if title_match else None
    title_len = len(title) if title else 0

    if title is None:
        issues.append("Title отсутствует")
    elif title_len > 70:
        issues.append(f"Title слишком длинный ({title_len} симв.) — максимум 70")
    elif title_len < 30:
        issues.append(f"Title слишком короткий ({title_len} симв.) — минимум 30")
    elif title_len > 60:
        recommendations.append(f"Title {title_len} симв. — можно сократить до 50-60")

    # --- Description ---
    # Match description inside metadata block (can be multi-line string but usually single line)
    desc_match = re.search(r'description:\s*["\']([^"\']+)["\']', content)
    description = desc_match.group(1) if desc_match else None
    desc_len = len(description) if description else 0

    if description is None:
        issues.append("Description отсутствует")
    elif desc_len < 120:
        issues.append(f"Description слишком короткий ({desc_len} симв.) — рекомендуется 140-160")
        recommendations.append(f"Description короткий ({desc_len} симв.)")
    elif desc_len > 160:
        issues.append(f"Description слишком длинный ({desc_len} симв.) — максимум 160")
        recommendations.append(f"Description длинный ({desc_len} симв.)")

    # --- H1 ---
    has_h1 = bool(re.search(r'<h1\b', content))
    if not has_h1:
        issues.append("H1 отсутствует")

    # --- og:image ---
    has_og_image = bool(re.search(r'og:image|images:\s*\[', content))
    if not has_og_image:
        issues.append("og:image отсутствует")

    # --- Images without alt ---
    img_tags = re.findall(r'<img\b[^>]*>', content)
    imgs_without_alt = []
    for img in img_tags:
        if 'alt=' not in img:
            imgs_without_alt.append(img[:80])
    if imgs_without_alt:
        issues.append(f"{len(imgs_without_alt)} изобр. без alt")

    # --- Article Schema ---
    has_article_schema = bool(re.search(r'"@type":\s*"Article"', content))
    has_person_schema = bool(re.search(r'"@type":\s*"Person"', content))
    has_faq_schema = bool(re.search(r'"@type":\s*"FAQPage"', content))

    # --- Author/Date in Schema ---
    has_author = bool(re.search(r'"author"|author:', content))
    has_date = bool(re.search(r'"datePublished"|datePublished|dateModified|publishedTime', content))

    if not has_article_schema and not has_faq_schema:
        recommendations.append("Article/FAQ Schema не найден" if not has_faq_schema else None)

    if route == "/":
        # Homepage needs Person or Organization schema
        if not has_person_schema:
            recommendations.append("Person Schema отсутствует (главная страница)")
    elif not has_article_schema and not has_faq_schema:
        recommendations.append("Article Schema не найден")

    # Check author/date for blog pages
    if "/blog/" in route and route != "/blog":
        if not has_author:
            recommendations.append("Автор (Schema)")
        if not has_date:
            recommendations.append("Дата (Schema)")

    # Clean up None recommendations
    recommendations = [r for r in recommendations if r is not None]

    return {
        "route": route,
        "filepath": filepath,
        "title": title,
        "title_len": title_len,
        "description": description,
        "desc_len": desc_len,
        "has_h1": has_h1,
        "has_og_image": has_og_image,
        "imgs_without_alt": len(imgs_without_alt),
        "has_article_schema": has_article_schema,
        "has_person_schema": has_person_schema,
        "has_faq_schema": has_faq_schema,
        "has_author": has_author,
        "has_date": has_date,
        "issues": issues,
        "recommendations": recommendations,
    }

def print_report(results):
    """Print formatted report."""
    print("=" * 120)
    print(f"{'Статус':<10} {'URL':<45} {'Title':<6} {'Desc':<6} {'H1':<6} {'og:img':<6} {'Проблемы'}")
    print("=" * 120)
    for r in results:
        status = "❌" if r["issues"] else ("⚠️" if r["recommendations"] else "✅")
        title_status = f"{r['title_len']}ch"
        desc_status = f"{r['desc_len']}ch"
        h1_status = "✅" if r["has_h1"] else "❌"
        og_status = "✅" if r["has_og_image"] else "❌"
        issues_str = "; ".join(r["issues"]) if r["issues"] else "; ".join(r["recommendations"])
        print(f"{status:<10} {r['route']:<45} {title_status:<6} {desc_status:<6} {h1_status:<6} {og_status:<6} {issues_str}")
    print("=" * 120)

def save_json_report(results):
    """Save detailed JSON report."""
    output = PROJECT_DIR / "seo_audit_report.json"
    with open(output, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"\nDetailed report saved to: {output}")

def main():
    pages = find_page_files()
    print(f"Found {len(pages)} page files\n")

    for filepath in pages:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        result = extract_metadata(content, filepath)
        RESULTS.append(result)

    print_report(RESULTS)
    save_json_report(RESULTS)

    # Summary
    total_issues = sum(len(r["issues"]) for r in RESULTS)
    total_recs = sum(len(r["recommendations"]) for r in RESULTS)
    pages_with_issues = sum(1 for r in RESULTS if r["issues"])
    pages_with_recs = sum(1 for r in RESULTS if r["recommendations"] and not r["issues"])
    pages_ok = sum(1 for r in RESULTS if not r["issues"] and not r["recommendations"])

    print(f"\n📊 Summary:")
    print(f"   Pages with issues: {pages_with_issues}")
    print(f"   Pages with recommendations: {pages_with_recs}")
    print(f"   Pages OK: {pages_ok}")
    print(f"   Total issues: {total_issues}")
    print(f"   Total recommendations: {total_recs}")

if __name__ == "__main__":
    main()
