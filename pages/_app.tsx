import "../styles/globals.css";
import "../public/css/style.css";
import "../public/vendor/fontawesome-free/css/all.min.css";
import "../public/vendor/animate.css/animate.min.css";
import "../public/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/vendor/boxicons/css/boxicons.min.css";
import "../public/vendor/glightbox/css/glightbox.min.css";
import "../public/vendor/remixicon/remixicon.css";
import "../public/vendor/swiper/swiper-bundle.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />

        {/* Vendor CSS Files */}
        <link
          href="/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* Main CSS Files */}
        <link href="/css/style.css" rel="stylesheet" />

        {/* Vendor JS Files */}
        <script src="/vendor/purecounter/purecounter.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/vendor/php-email-form/validate.js"></script>

        {/* Main JS Files */}
        <script src="/js/main.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
