import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "../../components/Nav/Navigation";
import Layout from "../../components/Layout/Layout";
import Author from "../../components/Author/Author";

function SingleBlog(post) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title> {post.title.rendered} </title>
        <meta content="" />
      </Head>
      <Layout>
        <h1
          className={
            "font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600"
          }
        >
          {post.title.rendered}
        </h1>
        <span> {post.date} </span>
        <div className="">
          {post.featured_image_src ? (
            <Image src={post.featured_image_src} width={1024} height={500} />
          ) : null}

          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          ></div>
        </div>
        <Author />
      </Layout>
    </>
  );
}

export default SingleBlog;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `http://www.wpdemo.local/wp-json/wp/v2/posts/?slug=${slug}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: data[0] };
}
