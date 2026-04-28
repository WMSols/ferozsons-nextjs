const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

export { STRAPI_BASE_URL };

const STRAPI_BEARER_TOKEN =
  process.env.NEXT_PUBLIC_STRAPI_BEARER_TOKEN ??
  "952c4e28d31fc2b6035e116f9d04950d4330b69e0a0ed7fb5972f4639dce6f191a725ad2cdc6dc2b188d6c8bba828628f9398a0c16ccf904c503bea896f4fdd07c88ceaadea1a01c704f432069aac8fca082851084b0b563c08d7b08dcfe2a88d520eaa8fdff58fa7bfde67f1e157c8389fa92c232679b5a904a26706b3b3a7b";

export async function strapiFetch(input: string, init?: RequestInit) {
  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${STRAPI_BEARER_TOKEN}`);
  if (!headers.has("Accept")) headers.set("Accept", "application/json");

  const res = await fetch(input, { ...init, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Strapi request failed (${res.status} ${res.statusText}) ${text}`.trim(),
    );
  }
  return res;
}

export function getStrapiImageUrl(url: string | undefined): string {
  if (!url) return "";
  return url.startsWith("http") ? url : `${STRAPI_BASE_URL}${url}`;
}

/** Use for any Strapi media URL (images, PDFs, etc.). */
export function getStrapiMediaUrl(url: string | undefined): string {
  return getStrapiImageUrl(url);
}

export type ProductsFilterMode = "category" | "prescribed" | "az";

export interface BuildProductsUrlParams {
  page: number;
  pageSize?: number;
  filterMode: ProductsFilterMode;
  selectedCategory: string;
}

export function buildProductsUrl({
  page,
  pageSize = 25,
  filterMode,
  selectedCategory,
}: BuildProductsUrlParams): string {
  const params = new URLSearchParams();
  params.set("populate", "*");
  params.set("pagination[page]", String(page));
  params.set("pagination[pageSize]", String(pageSize));

  // --- THIS IS THE UPDATED SECTION ---
  if (filterMode === "category" && selectedCategory) {
    // This now checks if the selectedCategory matches the slug OR the name
    params.set(
      "filters[$or][0][product_category][slug][$eq]",
      selectedCategory,
    );
    params.set(
      "filters[$or][1][product_category][name][$eq]",
      selectedCategory,
    );
  }
  // -----------------------------------

  if (filterMode === "az") {
    params.set("sort", "name:asc");
  }

  // Requires a boolean `commonlyPrescribed` field on the Product content-type in Strapi.
  // Remove this block if the field does not exist to avoid 400 errors.
  if (filterMode === "prescribed") {
    params.set("filters[commonlyPrescribed][$eq]", "true");
  }

  return `${STRAPI_BASE_URL}/api/products?${params.toString()}`;
}

export function getCategoriesUrl(): string {
  return `${STRAPI_BASE_URL}/api/product-categories`;
}

export function getProductBySlugUrl(slug: string): string {
  const params = new URLSearchParams();
  params.set("filters[slug][$eq]", slug);
  params.set("populate", "*");
  return `${STRAPI_BASE_URL}/api/products?${params.toString()}`;
}

export interface BuildNewsroomsUrlParams {
  page: number;
  pageSize?: number;
}

export function buildNewsroomsUrl({
  page,
  pageSize = 25,
}: BuildNewsroomsUrlParams): string {
  const params = new URLSearchParams();
  params.set("pagination[page]", String(page));
  params.set("pagination[pageSize]", String(pageSize));
  params.set("populate[featured_image][fields]", "url");
  params.set("populate[og_image][fields]", "url");
  params.set("sort", "createdAt:desc");

  return `${STRAPI_BASE_URL}/api/newsrooms?${params.toString()}`;
}

export function getNewsroomBySlugUrl(slug: string): string {
  const params = new URLSearchParams();
  params.set("filters[slug][$eq]", slug);
  params.set("populate", "*");
  return `${STRAPI_BASE_URL}/api/newsrooms?${params.toString()}`;
}

export function getReportTypesUrl(): string {
  return `${STRAPI_BASE_URL}/api/report-types`;
}

export interface BuildInvestorReportsUrlParams {
  page: number;
  pageSize?: number;
  type?: string;
}

export function buildInvestorReportsUrl({
  page,
  pageSize = 25,
  type,
}: BuildInvestorReportsUrlParams): string {
  const params = new URLSearchParams();
  params.set("populate", "report_file");
  params.set("pagination[page]", String(page));
  params.set("pagination[pageSize]", String(pageSize));

  if (type?.trim()) {
    params.set("filters[report_type][name][$eq]", type.trim());
  }

  return `${STRAPI_BASE_URL}/api/investor-reports?${params.toString()}`;
}
// For fetching Job Posts
export interface BuildJobPostsUrlParams {
  page?: number;
  pageSize?: number;
}

export function buildJobPostsUrl({
  page = 1,
  pageSize = 25,
}: BuildJobPostsUrlParams = {}): string {
  const params = new URLSearchParams();
  params.set("populate", "*"); // Populates relations (like a company logo, if you add one later)
  params.set("pagination[page]", String(page));
  params.set("pagination[pageSize]", String(pageSize));
  params.set("sort", "createdAt:desc"); // Show the newest jobs first

  return `${STRAPI_BASE_URL}/api/job-posts?${params.toString()}`;
}

// For sending contact messages
export interface ContactMessagePayload {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactMessage(data: ContactMessagePayload) {
  const url = `${STRAPI_BASE_URL}/api/contact-messages`;

  // Strapi expects the fields to be wrapped inside a "data" object
  const body = JSON.stringify({ data });

  return strapiFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
}

// For sending Job applications
export interface JobApplicationPayload {
  fullName: string;
  email: string;
  coverLetter: string;
  title: string;
  resume?: File; // The native browser File object from your input type="file"
}

export async function submitJobApplication(payload: JobApplicationPayload) {
  const url = `${STRAPI_BASE_URL}/api/job-applications`;

  const { resume, ...restData } = payload;

 const formData = new FormData();

formData.append("data[fullName]", payload.fullName);
formData.append("data[email]", payload.email);
formData.append("data[title]", payload.title);
formData.append("data[coverLetter]", payload.coverLetter);

if (payload.resume) {
  formData.append("files.resume", payload.resume);
}
  // 3. Create fresh headers to guarantee NO "Content-Type" is set.
  // We MUST let the browser automatically generate the "multipart/form-data"
  // header along with its unique boundary hash.
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${STRAPI_BEARER_TOKEN}`);
  headers.set("Accept", "application/json");

  const body = formData;
  // Bypass the standard `strapiFetch` just for this upload to ensure
  // no global JSON headers accidentally infect this multipart request.
  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Strapi request failed (${res.status} ${res.statusText}) ${text}`.trim(),
    );
  }

  return res;
}
