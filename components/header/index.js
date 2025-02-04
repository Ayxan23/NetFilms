import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <header className={`${styles.header} container fluid`}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logo} href="/">
            <FaPlayCircle /> NETFILMS
          </Link>

          <nav className={styles.navigationMenu}>
            <Link href="/">MOVIES</Link>
            <Link href="#">SERIES</Link>
            <Link href="https://www.linkedin.com/in/aykhan-mustafayev23/">AYKHAN</Link>
          </nav>
        </div>
      </header>
      <div className={styles.headerSpace}></div>
    </>
  );
};

export default Header;
