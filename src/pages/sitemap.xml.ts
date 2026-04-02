import type { GetServerSideProps } from "next";

type SitemapPage = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
};

const PAGES: SitemapPage[] = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/about-us", changefreq: "weekly", priority: "0.9" },
  { path: "/contact", changefreq: "weekly", priority: "0.9" },
];

function getOrigin(req: Parameters<GetServerSideProps>[0]["req"]): string {
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol =
    typeof forwardedProto === "string"
      ? forwardedProto.split(",")[0]
      : req.headers.host?.includes("localhost")
        ? "http"
        : "https";
  const host = req.headers.host ?? "localhost:3000";

  return `${protocol}://${host}`;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const origin = getOrigin(req);
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = PAGES.map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${origin}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function SitemapXml() {
  return null;
}
