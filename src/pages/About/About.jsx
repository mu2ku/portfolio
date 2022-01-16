import React from 'react';
import styles from '../About/About.module.css'

const About = () => {
  return (  
    <>
    <div>
      <img className={styles.skills_photo} src="images/japan.jpg" alt="japan" />
    </div>
    <div className={styles.skills_wrapper}>
      <ul className={styles.skills_container}>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/html.svg" alt="html" />
          <span className={styles.skills_name}>HTML</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/css.svg" alt="html" />
          <span className={styles.skills_name}>CSS</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/bootstrap.png" alt="html" />
          <span className={styles.skills_name}>Bootstrap</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/javascript.svg" alt="html" />
          <span className={styles.skills_name}>JavaScript</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/react.svg" alt="html" />
          <span className={styles.skills_name}>React</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/node.svg" alt="html" />
          <span className={styles.skills_name}>NodeJS</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/python.svg" alt="html" />
          <span className={styles.skills_name}>Python</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/api.svg" alt="html" />
          <span className={styles.skills_name}>Rest API</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/mongo.svg.png" alt="html" />
          <span className={styles.skills_name}>MongoDB</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/Postgresql_elephant.svg.png" alt="html" />
          <span className={styles.skills_name}>PostgreSQL</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/django.jpeg" alt="html" />
          <span className={styles.skills_name}>Django</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/express.png" alt="html" />
          <span className={styles.skills_name}>Express</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/c.png" alt="html" />
          <span className={styles.skills_name}>C</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/cplus.png" alt="html" />
          <span className={styles.skills_name}>C++</span>
        </li>
        <li className={styles.skills_combo}>
          <img className={styles.skills_image}src="images/matlab.png" alt="html" />
          <span className={styles.skills_name}>Matlab</span>
        </li>
      </ul>
    </div>
    </>
  );
}
 
export default About;