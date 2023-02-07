import Head from "next/head";
import Marketplace_Page from "../components/Marketplace/Marketplace";
const Marketplace = () => {
  return (
    <>
      <Head>
        <title>Marketplace Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Marketplace_Page />
    </>
  );
};

export default Marketplace;