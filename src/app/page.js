// src/app/page.js

'use client';  // Mark this component as a Client Component

import Head from "next/head";


const Home = () => {
  const handleGetStartedClick = () => {
    alert('Start Your Billing Journey with Billers Mind!');
  };

  return (
    <div>
      <Head>
        <title>Billers Mind - Cloud Billing</title>
        <meta name="description" content="Billers Mind - Healthcare Billing Solution" />
      </Head>

      

      <main>
      {/*SideBar*/}
      {/*Feed*/}
      {/*Widgets*/}
      </main>
    </div>
  );
};

export default Home;
