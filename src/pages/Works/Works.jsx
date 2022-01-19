import React from 'react';
import styles from '../Works/Works.module.css'

const Works = () => {
  return (  
    <>
    <main>
      <div className={styles.works1_container}>
        <div>
          <img className={styles.works1_image} src="images/dominos.jpg" alt="dominos" /> 
        </div>
        <div className={styles.works1_description}>
          <span className={styles.works1_title}>DOMINOS</span>
          <p>A web browser-based game of dominoes versus a computer.</p>
          <i><p>HTML	&#9679; CSS 	&#9679; JavaScript</p></i>
          <a href="https://sei-dominos.surge.sh/" rel="noreferrer" target="_blank">VIEW LIVE</a> | <a href="https://github.com/mu2ku/Dominos" rel="noreferrer" target="_blank">VIEW REPO</a>
          <div className={styles.works1_counter_container}>
            <span className={styles.works1_counter}>01</span>
          </div>
        </div>
      </div>
      <div className={styles.works2_container}>
        <div className={styles.works1_description}>
          <span className={styles.works1_title}>LINGUA</span>
          <p className={styles.works_shortDes}>Lingua is a repository of free language learning resources for all language learners. Login requires Google OAuth.</p>
          <i><p>HTML	&#9679; CSS 	&#9679; JavaScript &#9679; Node.js &#9679; MongoDB &#9679; Express</p></i>
          <a href="https://sei-lingua-app.herokuapp.com/" rel="noreferrer" target="_blank">VIEW LIVE</a> | <a href="https://github.com/mu2ku/Lingua" rel="noreferrer" target="_blank">VIEW REPO</a>
          <div className={styles.works2_counter_container}>
            <span className={styles.works2_counter}>02</span>
          </div>
        </div>
        <div>
          <img className={styles.works1_image} src="images/lingua.png" alt="lingua" /> 
        </div>
      </div>
      
    </main>
    </>
  );
}
 
export default Works;