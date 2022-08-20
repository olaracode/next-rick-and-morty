import React from "react";
import { PropTypes } from "prop-types";
import Navbar from "@/organisms/navbar/";
import ThemeProvider from "theme/ThemeProvider";
import "../styles/globals.css";
import { AppProvider } from "context/ContextProvider";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Techie Blog</title>
        <meta name="description" content="Rick and Morty" />
        <meta
          name="keywords"
          content="Programming, technology, code, web development"
        />
      </Head>
      <ThemeProvider>
        <Navbar />
        <Box mx={{ base: "5%", md: "15%", xl: "25%" }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </AppProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  characters: PropTypes.array,
};

export default MyApp;
