import React from "react";
import styles from '../Home/Home.module.css'

const Home = () => {
  return (  
    <>
    <main> 
      <div className={styles.home_container}>
        <div className={styles.intro}>
        <p id={styles.hello}>HI, I'M GRACE</p>
        &#9883;<br/>
        &#9883;<br/>
        &#9883;<br/>
        <p>I am a former aerospace engineer turned software engineer with an almost 5-year career in the IT space, providing impactful IT audit services and solutions to both U.S. government agencies and private/public companies. I am a life-long learner and am passionate about leveraging the latest full-stack technologies and frameworks to create dynamic and innovative websites.</p>
        &#9883;<br/>
        &#9883;<br/>
        &#9883;<br/>
        <p>Feel free to look at my work <a href="/works">here</a> at contact me <a href="/contact">here</a>.</p>
        </div>
      </div>
    </main>
    </>
  );
}
 
export default Home;