import React from 'react';
import styles from '../Works/Works.module.css'

const Works = () => {
  return (  
    <>
    <main>
      <div className={styles.works_container}>
        <div>
          <img className={styles.works_image} src="images/dominos.jpg" alt="dominos" /> 
        </div>
        <div className={styles.works_description}>
          <span className={styles.works_title}>DOMINOS</span>
          <p>A web browser-based game of dominoes versus a computer.</p>
          <i><p>HTML	&#9679; CSS 	&#9679; JavaScript</p></i>
          <a href="https://sei-dominos.surge.sh/" rel="noreferrer" target="_blank">VIEW LIVE</a> | <a href="https://github.com/mu2ku/Dominos" rel="noreferrer" target="_blank">VIEW REPO</a>
          <div className={styles.works_counter_container}>
            <span className={styles.works_counter}>01</span>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
 
export default Works;