import React from "react";
import Image from "next/image";

function Author() {
  return (
    <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <Image
          src="https://www.gravatar.com/avatar/96e9483c2c8f3dec88d3f634f974da05?s=200"
          class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          alt="Sandip Baikare"
          width={1024}
          height={500}
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Sandip Baikare</h5>
          <p class="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}

export default Author;
