import React from "react";
import { Link } from 'react-router-dom'
import styles from '../NavBar/NavBar.module.css'

const NavBar = (props) => {
  
  return (
      <>
        <div className={styles.navbar}>
          <div className={styles.header_container}>
            <h2 className={styles.heading}>Grace Mutuku</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.combo}>
              <img src="images/002-home.png" alt="" /> <Link className={styles.navbar_items} to="/">Home</Link>
            </div>
            <div className={styles.combo}>
              <img src="images/003-programming.png" alt="" /> <Link className={styles.navbar_items} to="/works">Works</Link>
            </div>
            <div className={styles.combo}>
              <img src="images/001-contact.png" alt="" /> <Link className={styles.navbar_items} to="/contact">Contact Me</Link>
            </div>
          </div>
        </div>
      </>
  );
};

export default NavBar;