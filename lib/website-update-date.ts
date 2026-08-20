export const WEBSITE_UPDATE_DATE_FALLBACK = "05/08/2026";

export function formatWebsiteUpdateDate(rawDate: string) {
  const dateObj = new Date(rawDate);
  if (Number.isNaN(dateObj.getTime())) return WEBSITE_UPDATE_DATE_FALLBACK;

  return dateObj.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export async function fetchWebsiteUpdateDate(): Promise<string> {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL || "https://srv1615764.hstgr.cloud";

  try {
    const res = await fetch(`${baseUrl}/api/website-update-date`);

    if (!res.ok) return WEBSITE_UPDATE_DATE_FALLBACK;

    const json = await res.json();
    const rawDate = json?.data?.lastUpdated as string | undefined;

    if (!rawDate) return WEBSITE_UPDATE_DATE_FALLBACK;

    return formatWebsiteUpdateDate(rawDate);
  } catch {
    return WEBSITE_UPDATE_DATE_FALLBACK;
  }
}
