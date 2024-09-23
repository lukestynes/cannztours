import Link from "next/link";

export function processLinks(text: string) {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  const parts = [];
  let lastIndex = 0;

  let match;
  while ((match = regex.exec(text)) !== null) {
    const linkText = match[1];
    const url = match[2];

    // Push the text before the link
    if (lastIndex < match.index) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Push the link JSX element
    parts.push(
      <Link
        key={url}
        className="link-hover text-primary"
        href={url || ""}
        target="_blank"
      >
        {linkText}
      </Link>,
    );

    // Update the last index to the end of the current match
    lastIndex = regex.lastIndex;
  }

  // Push any remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}
