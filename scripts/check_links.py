from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, unquote


PROJECT_ROOT = Path(__file__).resolve().parents[1]


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)

        for attribute_name in ("href", "src"):
            if attribute_name in attributes:
                self.links.append((tag, attribute_name, attributes[attribute_name]))


def is_external_or_ignored(link):
    ignored_prefixes = (
        "http://",
        "https://",
        "mailto:",
        "tel:",
        "javascript:",
        "data:",
        "#",
    )

    return link.startswith(ignored_prefixes)


def clean_local_link(link):
    parsed_link = urlparse(link)
    clean_path = unquote(parsed_link.path)

    if not clean_path:
        return None

    return clean_path


def resolve_local_path(html_file, link):
    clean_path = clean_local_link(link)

    if clean_path is None:
        return None

    if clean_path.startswith("/"):
        return PROJECT_ROOT / clean_path.lstrip("/")

    return html_file.parent / clean_path


def check_html_file(html_file):
    parser = LinkParser()
    html_text = html_file.read_text(encoding="utf-8", errors="ignore")
    parser.feed(html_text)

    broken_links = []

    for tag, attribute_name, link in parser.links:
        if is_external_or_ignored(link):
            continue

        resolved_path = resolve_local_path(html_file, link)

        if resolved_path is None:
            continue

        if not resolved_path.exists():
            broken_links.append(
                {
                    "html_file": html_file,
                    "tag": tag,
                    "attribute": attribute_name,
                    "link": link,
                    "expected_path": resolved_path,
                }
            )

    return broken_links


def main():
    html_files = sorted(PROJECT_ROOT.rglob("*.html"))

    all_broken_links = []

    for html_file in html_files:
        all_broken_links.extend(check_html_file(html_file))

    if not all_broken_links:
        print("All local HTML links and sources look OK.")
        return

    print("Broken local links found:")
    print()

    for item in all_broken_links:
        relative_html_file = item["html_file"].relative_to(PROJECT_ROOT)
        relative_expected_path = item["expected_path"].relative_to(PROJECT_ROOT)

        print(f"File: {relative_html_file}")
        print(f"Tag: <{item['tag']}>")
        print(f"Attribute: {item['attribute']}")
        print(f"Link: {item['link']}")
        print(f"Expected path: {relative_expected_path}")
        print("-" * 60)

    raise SystemExit(1)


if __name__ == "__main__":
    main()