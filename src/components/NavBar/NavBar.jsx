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
              {/* <img src="images/002-home.png" alt="" />  */}
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
                to="Skillset"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Skillset
              </Link>
            </li>
            <li className={styles.navbar_item}>
              {/* <img src="images/003-programming.png" alt="" />  */}
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
            <li className={styles.navbar_item}>
              {/* <img src="images/001-contact.png" alt="" />  */}
              <Link 
                activeClass="active"
                className={styles.navbar_link} 
                to="Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      </>
  );
};

export default NavBar;