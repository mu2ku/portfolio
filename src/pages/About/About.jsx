import React from 'react';
import { Link } from 'react-scroll'
import styles from '../About/About.module.css'

const About = () => {
  return (  
    <>
    <main>
      <div className={styles.about_container}>
        <img className={styles.skills_photo} src="images/cherry.jpg" alt="cherry" />
        <div className={styles.about}>
          <p className={styles.about_title}>ABOUT <span>GRACE</span></p>
          <p>I am a graduate of the General Assembly <span>Software Engineering</span> Immersive Bootcamp and I have a BS in <span>Aerospace Engineering</span> from the University of Maryland, College Park. I have a <span>5-year career</span> in the IT space, providing impactful IT audit services and solutions to both U.S. government agencies and public companies. I am a life-long learner and am passionate about leveraging the latest <span>full-stack technologies</span> and <span>frameworks</span> to create dynamic and innovative websites!</p>
        </div>
      </div>
      <div className={styles.skills_title_container}>
        <p className={styles.skills_title}>MY <span>SKILLS</span></p>
      </div>
      <div className={styles.skills_wrapper}>
        <ul className={styles.skills_container}>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/html.svg" alt="html" />
            <span className={styles.skills_name}>HTML5</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/css.svg" alt="css" />
            <span className={styles.skills_name}>CSS3</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/bootstrap.svg" alt="bootstrap" />
            <span className={styles.skills_name}>Bootstrap</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/javascript.svg" alt="javascript" />
            <span className={styles.skills_name}>JavaScript</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/react.svg" alt="react" />
            <span className={styles.skills_name}>React</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/node.svg" alt="node" />
            <span className={styles.skills_name}>NodeJS</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/python.svg" alt="python" />
            <span className={styles.skills_name}>Python</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/api.svg" alt="API" />
            <span className={styles.skills_name}>Rest API</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/mongodb.jpeg" alt="mongoDB" />
            <span className={styles.skills_name}>MongoDB</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/postgresql.jpeg" alt="postgresql" />
            <span className={styles.skills_name}>PostgreSQL</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/django.jpeg" alt="django" />
            <span className={styles.skills_name}>Django</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/express.jpg" alt="express" />
            <span className={styles.skills_name}>Express</span>
          </li>
          {/* <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/c.png" alt="C" />
            <span className={styles.skills_name}>C</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/cplus.png" alt="C++" />
            <span className={styles.skills_name}>C++</span>
          </li>
          <li className={styles.skills_combo}>
            <img className={styles.skills_image}src="images/matlab.png" alt="Matlab" />
            <span className={styles.skills_name}>MATLAB</span>
          </li> */}
        </ul>
      </div>
      <div className={styles.to_next}>
        <Link 
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className={styles.arrow} src="images/arrow_down.png" alt="" />
        </Link>
      </div>
    </main>
    </>
  );
}
 
export default About;