import type { StrapiBlock, StrapiBlockTextChild } from "@/types/strapi";

function renderTextChild(child: StrapiBlockTextChild): string {
  let text = escapeHtml(child.text);
  if (child.bold) text = `<strong>${text}</strong>`;
  if (child.italic) text = `<em>${text}</em>`;
  if (child.underline) text = `<u>${text}</u>`;
  return text;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Renders Strapi Blocks (e.g. description) to HTML string.
 * Supports paragraph and text nodes with bold/italic/underline.
 */
export function strapiBlocksToHtml(blocks: StrapiBlock[] | undefined): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        const inner = (block.children ?? [])
          .map((c) => (c.type === "text" ? renderTextChild(c) : ""))
          .join("");
        return `<p>${inner || "<br>"}</p>`;
      }
      return "";
    })
    .join("");
}
