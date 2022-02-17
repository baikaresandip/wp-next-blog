import React from "react";
import Navigation from "../components/Nav/Navigation";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="404 page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div class="w-full p-4">
          <div class="w-full font-mono flex flex-col items-center relative z-10">
            <div class="text-center">
              <h3 class="mb-2 text-5xl font-semibold">404</h3>
              <p class="text-base">Page Not Fount</p>
              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
