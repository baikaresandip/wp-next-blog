import React from "react";
import Navigation from "../components/Nav/Navigation";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

export default function contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />
        <h1>Contact</h1>
      </main>
      <Footer />
    </div>
  );
}
