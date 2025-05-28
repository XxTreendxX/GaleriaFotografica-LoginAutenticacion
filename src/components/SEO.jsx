import { Helmet } from "react-helmet-async";

function SEO({
  title = "RodriDev — Fotografía Profesional",
  description = "Portfolio profesional de fotografía. Descubrí momentos únicos y obras visuales.",
  image = "/og-image.jpg", // ruta local o URL absoluta de imagen para OpenGraph
  url = "https://www.rodridev.com.ar/",
}) {
  return (
    <Helmet>
      {/* Title & meta descripción */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph para redes sociales */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default SEO;
