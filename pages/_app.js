import { ParallaxProvider } from "react-scroll-parallax";
import { PageFade } from "../animations/page";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MotionConfig } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const scrollAnimationConfig = {
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <ParallaxProvider>
      <MotionConfig {...scrollAnimationConfig}>
        <Layout pageDetails={Component.pageDetails && Component.pageDetails}>
          <PageFade>
            <Component {...pageProps} />
          </PageFade>
        </Layout>
      </MotionConfig>
    </ParallaxProvider>
  );
}

export default MyApp;
