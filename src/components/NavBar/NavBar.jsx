import React from "react";
import { Link } from 'react-router-dom'
import styles from '../NavBar/NavBar.module.css'

const NavBar = (props) => {
  
  return (
      <>
        <div className={styles.navbar}>
          <div className={styles.header_container}>
            <h1 className={styles.heading}>Grace Mutuku</h1>
          </div>
          <div className={styles.links}>
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