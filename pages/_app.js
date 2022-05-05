import "../styles/globals.css";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <title>Meta Check</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@meta-check" />
        <meta
          name="twitter:title"
          content="BasaKhujo: A property searching platform in Bangladesh"
        />
        <meta
          name="twitter:description"
          content="BasaKhujo is an accommodation solution provider platform that makes it possible to rent a house & mess without paying any brokerage."
        />
        <meta name="twitter:creator" content="@meta-check" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/nomidman/image/upload/v1651585650/og-image_qbdvtq.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BasaKhujo: A property searching platform in Bangladesh"
        />
        <meta property="og:site_name" content="Meta-Check" />

        <meta property="og:url" content="https://meta-check.netlify.app/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/nomidman/image/upload/v1651585650/og-image_qbdvtq.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/nomidman/image/upload/v1651585650/og-image_qbdvtq.png"
        />
        <meta
          property="og:image:alt"
          content="BasaKhujo: A property searching platform in Bangladesh"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="BasaKhujo is an accommodation solution provider platform that makes it possible to rent a house & mess without paying any brokerage."
        />
        <meta
          name="keywords"
          content="basakhujo, bachelor mess, female mess, family flat"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
