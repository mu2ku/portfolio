import React from "react";
import { Link } from 'react-router-dom'
import styles from '../NavBar/NavBar.module.css'

const NavBar = (props) => {
  
  return (
      <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar}>
          <h1>Grace Mutuku</h1>
          <Link className={styles.navbar_items} to="/">Home</Link>
          <Link className={styles.navbar_items} to="/about">About</Link>
          <Link className={styles.navbar_items} to="/projects">Projects</Link>
          <Link className={styles.navbar_items} to="/contact">Contact Me</Link>
        </div>
      </div>
      </>
  );
};

export default NavBar;