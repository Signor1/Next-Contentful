import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <header>
        <Link href="/">
          <h1>
            <span>Just Add</span>
            <span>Marmite</span>
          </h1>
          <h2>Spread the joy</h2>
        </Link>
      </header>
      <div className="page-content">{children}</div>
      <footer>
        <p>Copyright 2023. Just Add Marmite</p>
      </footer>
    </section>
  );
};

export default Layout;
