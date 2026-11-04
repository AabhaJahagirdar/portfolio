// // import { GoogleTagManager } from "@next/third-parties/google";
// import Script from "next/script";
// import { Inter } from "next/font/google";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "./components/footer";
// import ScrollToTop from "./components/helper/scroll-to-top";
// import Navbar from "./components/navbar";
// import "./css/card.scss";
// import "./css/globals.scss";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Portfolio of Aabha Jahagirdar",
//   description:
//     "This is the portfolio of Aabha Jahagirdar. I am a student and a tech enthusiast. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ToastContainer />
//         <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
//           <Navbar />
//           {children}
//           <ScrollToTop />
//         </main>
//         <Footer />
//       </body>
//       <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
//     </html>
//   );
// }

import Script from "next/script";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";

import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Aabha Jahagirdar",
  description:
    "Portfolio of Aabha Jahagirdar — Computer Engineering student with interests in AI, ML, Robotics, and full-stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');
              `,
            }}
          />
        )}

        <ToastContainer />

        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>

        <Footer />
      </body>
    </html>
  );
}
