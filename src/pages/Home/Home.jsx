import React from "react";
import 'animate.css';
import styles from '../Home/Home.module.css'

const Home = () => {
  return (  
    <>
    <main> 
      <div className={styles.home_container}>
        <img className={styles.home_image} src="images/new_york_v2.jpg" alt="" />
        <h1 className={styles.home_heading}>GRACE MUTUKU</h1>
        <div className={styles.home_paragraph}>
          <p>
            I'm a software engineer and web designer based in Washington D.C.
          </p>
          <p>
            I use my passion for web development to create dynamic and interactive user experiences.
          </p>
        </div>
        <div className={styles.home_buttons}>
          <a href="https://www.linkedin.com/in/grace-mutuku/" rel="noreferrer" target="_blank"><img src="images/linkedin.png" alt="linkedin" /></a>
          <a href="https://www.linkedin.com/in/grace-mutuku/" rel="noreferrer" target="_blank"><img src="images/gmail.png" alt="gmail" /></a>
        </div>
      </div>
    </main>
    </>
  );
}
 
export default Home;