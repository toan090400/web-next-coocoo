import Head from "next/head";
import Account_Page from "../components/Account/Account_Page";
const Account = () => {
  return (
    <>
      <Head>
        <title>Account Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Account_Page />
    </>
  );
};

export default Account;