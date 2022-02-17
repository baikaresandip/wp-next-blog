import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navigation() {
  const BlogNav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Login", "/login"],
  ];

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <Link className="flex-shrink-0" href="/">
                <img
                  className="h-8 w-8"
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  alt="Workflow"
                />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {BlogNav.map(([title, url]) => (
                    <Link
                      className="text-gray-300  py-2 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href={url}
                    >
                      <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {BlogNav.map(([title, url]) => (
              <Link
                className="text-gray-300 py-2 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href={url}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

// <nav className="flex sm:justify-center space-x-4">
//       {nav.map(([title, url]) => (
//         <Link
//           href={url}
//           className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
//         >
//           <a> {title} </a>
//         </Link>
//       ))}
//     </nav>
// https://mdbootstrap.com/img/new/avatars/2.jpg
