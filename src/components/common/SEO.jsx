import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url }) => {
  const baseUrl = 'https://restagnopianoforti.it';
  const defaultTitle = 'Restagno Pianoforti - Vendita, Restauro e Accordatura Pianoforti a Torino';
  const defaultDescription = 'Dal 1988 Restagno Pianoforti offre servizi professionali di vendita, restauro e accordatura di pianoforti a Torino. Specialisti in pianoforti nuovi e usati, verticali e a coda.';
  const defaultImage = '/src/assets/Restagno-Pianoforti.jpg';

  const seoTitle = title ? `${title} | Restagno Pianoforti` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = `${baseUrl}${image || defaultImage}`;
  const seoUrl = `${baseUrl}${url || ''}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* Additional Tags */}
      <link rel="canonical" href={seoUrl} />
    </Helmet>
  );
};

export default SEO;
