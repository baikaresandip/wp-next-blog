import React from "react";
import LoginForm from "../components/Login/LoginForm";
import Navigation from "../components/Nav/Navigation";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}