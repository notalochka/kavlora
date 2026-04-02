import type { GetServerSideProps } from "next";

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
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Host: ${origin}
Sitemap: ${origin}/sitemap.xml`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write(robots);
  res.end();

  return { props: {} };
};

export default function RobotsTxt() {
  return null;
}
