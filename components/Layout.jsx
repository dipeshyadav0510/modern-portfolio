import { Sora } from "next/font/google";
import Head from "next/head";
import { usePathname } from "next/navigation";

import Header from "../components/Header";
import Nav from "../components/Nav";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const pathname = usePathname();

  // Get page title based on current path
  const getPageTitle = () => {
    const path = pathname === '/' ? 'Portfolio' : pathname.slice(1);
    return `Dipesh Yadav | ${path.charAt(0).toUpperCase() + path.slice(1)}`;
  };

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>{getPageTitle()}</title>
        <meta
          name="description"
          content="Dipesh Yadav - Full-stack web developer crafting modern and innovative digital solutions."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Dipesh Yadav" />
        <meta name="theme-color" content="#06B6D4" />
      </Head>

      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
