import React from 'react';
import styles from '../Works/Works.module.css'

const Works = () => {
  return (  
    <>
    <main>
      {/* Dominos */}
      <div className={styles.works1_container}>
        <div>
          <img className={styles.works1_image} src="images/dominos.jpg" alt="dominoes" /> 
        </div>
        <div className={styles.works1_description}>
          <span className={styles.works1_title}>DOMINOES</span>
          <p>A web browser-based game of dominoes versus a computer.</p>
          <i><p>HTML5	&#9679; CSS3 	&#9679; JavaScript</p></i>
          <a href="https://sei-dominos.surge.sh/" rel="noreferrer" target="_blank">VIEW LIVE</a> | <a href="https://github.com/mu2ku/Dominos" rel="noreferrer" target="_blank">VIEW REPO</a>
          <div className={styles.works1_counter_container}>
            <span className={styles.works1_counter}>01</span>
          </div>
        </div>
      </div>
      {/* Lingua */}
      <div className={styles.works2_container}>
        <div className={styles.works1_description}>
          <span className={styles.works1_title}>LINGUA</span>
          <p className={styles.works_shortDes}>Lingua is a repository of free language learning resources for all language learners. Login requires Google OAuth.</p>
          <i><p>HTML5	&#9679; CSS3 	&#9679; JavaScript &#9679; Node.js &#9679; MongoDB &#9679; Express</p></i>
          <a href="https://lingua-app.herokuapp.com/" rel="noreferrer" target="_blank">VIEW LIVE</a> | <a href="https://github.com/mu2ku/Lingua" rel="noreferrer" target="_blank">VIEW REPO</a>
          <div className={styles.works2_counter_container}>
            <span className={styles.works2_counter}>02</span>
          </div>
        </div>
        <div>
          <img className={styles.works1_image} src="images/lingua.png" alt="lingua" /> 
        </div>
      </div>
      {/* Genshin Builds */}
      {/* <div className={styles.works1_container}>
        <div>
          <img className={styles.works1_image} src="images/genshin.png" alt="genshin" /> 
        </div>
        <div className={styles.works1_description}>
          <span className={styles.works1_title}>GENSHIN BUILDS</span>
          <p>Genshin Builds is an application where players of the popular action RPG, Genshin Impact, can create, mix and match potential team builds!</p>
          <i><p>HTML5	&#9679; CSS3 	&#9679; JavaScript &#9679; MongoDB &#9679; Express &#9679; React &#9679; Node.js &#9679; REST API</p></i>
          <a href="https://genshin-team-builder.herokuapp.com/" rel="noreferrer" target="_blank">VIEW LIVE</a> | <a href="https://github.com/mu2ku/genshin-builds" rel="noreferrer" target="_blank">VIEW REPO</a>
          <div className={styles.works1_counter_container}>
            <span className={styles.works1_counter}>03</span>
          </div>
        </div>
      </div> */}
      {/* J'ai Faim, Je Mange */}
      <div className={styles.works2_container}>
        <div className={styles.works1_description}>
          <span className={styles.works1_title}>J'AI FAIM, JE MANGE</span>
          <p className={styles.works_shortDes}>"J'ai Faim, Je Mange" is a Python/Django web application for users to search, collect, and add their favorite recipes.</p>
          <i><p>HTML5	&#9679; CSS3 	&#9679; JavaScript &#9679; Python &#9679; Django &#9679; REST API</p></i>
          <a href="https://jai-app.herokuapp.com/" rel="noreferrer" target="_blank">VIEW LIVE</a> | <a href="https://github.com/mu2ku/J-ai-Faim-Je-Mange" rel="noreferrer" target="_blank">VIEW REPO</a>
          <div className={styles.works2_counter_container}>
            <span className={styles.works2_counter}>04</span>
          </div>
        </div>
        <div>
          <img className={styles.works1_image} src="images/jai.png" alt="jai" /> 
        </div>
      </div>
    </main>
    </>
  );
}
 
export default Works;