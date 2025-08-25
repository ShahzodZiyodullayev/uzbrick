import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "/logo.svg",
  url = "https://uzbrick.uz",
  type = "website",
  noIndex = false,
}) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;
  const isRussian = currentLang === "ru";

  const defaultTitle = isRussian
    ? "UzBrick - Качественные строительные материалы в Узбекистане"
    : "UzBrick - Uzbekistonda sifatli qurilish materiallari";

  const defaultDescription = isRussian
    ? "UzBrick - ведущий поставщик качественных строительных материалов в Узбекистане. Кирпич, блоки, цемент и другие материалы для строительства."
    : "UzBrick - Uzbekistondagi sifatli qurilish materiallarining yetakchi yetkazib beruvchisi. G'isht, bloklar, sement va boshqa qurilish materiallari.";

  const defaultKeywords = isRussian
    ? "кирпич, строительные материалы, Узбекистан, строительство, блоки, цемент"
    : "g'isht, qurilish materiallari, Oʻzbekiston, qurilish, bloklar, sement";

  const fullTitle = title ? `${title} | UzBrick` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="language" content={isRussian ? "Russian" : "Uzbek"} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={isRussian ? "ru_RU" : "uz_UZ"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={image} />

      {/* Language alternatives */}
      <link rel="alternate" hrefLang="ru" href={`${url}?lang=ru`} />
      <link rel="alternate" hrefLang="uz" href={`${url}?lang=uz`} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Set html lang attribute */}
      <html lang={currentLang} />
    </Helmet>
  );
};
