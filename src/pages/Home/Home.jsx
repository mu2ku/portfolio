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
            I am a <span>software engineer</span> and <span>web designer</span> based in Washington, D.C.
          </p>
          <p>
            There's nothing I love more than using my skills to create unique and engaging user experiences.
          </p>
          <p>
            I'd love to connect! For any business inquiries or a quick chat feel free to reach me through the below avenues.
          </p>
        </div>
        <div className={styles.home_buttons}>
          <a className={styles.home_images} href="https://www.linkedin.com/in/grace-mutuku/" rel="noreferrer" target="_blank"><img src="images/linkedin.png" alt="linkedin" /></a>
          <a className={styles.home_images} href="mailto:gmutuku@gmail.com" rel="noreferrer" target="_blank"><img src="images/gmail.png" alt="gmail" /></a>
          <a className={styles.home_images} href="https://github.com/mu2ku" rel="noreferrer" target="_blank"><img src="images/github.png" alt="github" /></a>
          <button className={styles.home_resume}><a href="images/resume.pdf" download>Download Resume</a></button>
        </div>
      </div>
    </main>
    </>
  );
}
 
export default Home;