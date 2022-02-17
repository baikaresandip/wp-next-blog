import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

function BlogItem({ post }) {
  console.log(post);
  return (
    <>
      <div key={post.id} className=" rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          {post.featured_image_src && (
            <Image
              src={post.featured_image_src}
              alt="featured image"
              className="w-full"
              width="500"
              height="350"
              layout="responsive"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          )}
          <div className="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
            </h5>
            <p className="text-gray-700 text-base mb-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              ></div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
