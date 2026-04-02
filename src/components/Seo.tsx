import Head from "next/head";
import { toAbsoluteUrl } from "@/lib/seo";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  noindex?: boolean;
};

export function Seo({ title, description, path, imagePath = "/logo_seo.jpg", noindex = false }: SeoProps) {
  const canonicalUrl = toAbsoluteUrl(path);
  const ogImageUrl = toAbsoluteUrl(imagePath);
  const robotsContent = noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:site_name" content="Kavlora" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
