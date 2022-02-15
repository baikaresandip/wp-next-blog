import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function SingleBlog(post) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title> {post.title.rendered} </title>
        <meta content="" />
      </Head>
      <main>
        <Link href="/" className="btn">
          Back to Home
        </Link>
        <h1 className="h1"> {post.title.rendered} </h1>
        <span> {post.date} </span>

        {post.featured_image_src ? (
          <Image src={post.featured_image_src} width={1024} height={500} />
        ) : null}

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        ></div>
      </main>
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
