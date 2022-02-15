import React from "react";
import Link from "next/link";

function Navigation() {
  const nav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Login", "/login"],
  ];

  return (
    <nav className="flex sm:justify-center space-x-4">
      {nav.map(([title, url]) => (
        <Link
          href={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          <a> {title} </a>
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
