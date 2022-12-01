import Head from "next/head";
import { useRouter } from "next/router";
import { Fade } from "../../animations/scroll";
import Agent from "./Agent";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

function Layout({ children, pageDetails }) {
  const { pathname } = useRouter();

  const headSection = (
    <Head>
      <title>{pageDetails?.title}</title>
      <meta name="description" content={pageDetails?.description} />
      <meta name="keywords" content={pageDetails?.keywords} />
    </Head>
  );

  return (
    <>
      {headSection}

      <div className="overflow-x-hidden">
        <Fade>
          <Header />

          {pathname !== "/404" && <Banner pageDetails={pageDetails} />}

          {children}

          <Agent />

          <ScrollToTop />

          <Footer />
        </Fade>
      </div>
    </>
  );
}

export default Layout;
