import React from "react";
import { Link } from 'react-scroll'
import styles from '../NavBar/NavBar.module.css'

const NavBar = (props) => {
  
  return (
      <>
      <nav>
        <ul className={styles.navbar}>
          <div className={styles.links_container}>
            <li className={styles.navbar_item}>
              <Link 
                activeClass="active"
                className={styles.navbar_link} 
                to="Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className={styles.navbar_item}>
              <Link 
                activeClass="active"
                className={styles.navbar_link} 
                to="About Me"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className={styles.navbar_item}>
              <Link 
                activeClass="active"
                className={styles.navbar_link} 
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      </>
  );
};

export default NavBar;