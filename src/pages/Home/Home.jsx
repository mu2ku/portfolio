import React from "react";
import styles from '../Home/Home.module.css'

const Home = () => {
  return (  
    <>
    <div className={styles.home_container}>
      <div className={styles.intro}>
        <p>I'm Grace</p>
        <p>Freelancer,</p>
        <p>Full-Stack Developer,</p>
        <p>Language Learning Enthusiast</p>
        <p>Check out my projects here or contact me here</p>
      </div>
      <div className={styles.image_container}>
        <img className={styles.image}src="images/new_york_v2.jpg" alt="" />
      </div>
    </div>
    </>
  );
}
 
export default Home;