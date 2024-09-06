import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import GTM from "@/components/Gtm";
import AnimatedCursor from "react-animated-cursor";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowCursor(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      {showCursor && (
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          outerAlpha={3}
          innerScale={3}
          outerScale={5}
          hasBlendMode={true}
          showSystemCursor={true}
          color="12, 239, 232"
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
            mixBlendMode: "exclusion",
          }}
        />
      )}

      {loading ? (
        <Loader />
      ) : (
        <>
          <GTM />
          <Component {...pageProps} />
        </>
      )}
    </React.Fragment>
  );
}
