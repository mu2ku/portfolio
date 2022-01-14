import React from "react";
import styles from '../Home/Home.module.css'

const Home = () => {
  return (  
    <>
    <main> 
      <div className={styles.home_container}>
        <div className={styles.intro}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed viverra. Accumsan lacus vel facilisis volutpat est velit egestas dui. In cursus turpis massa tincidunt dui ut. Pharetra convallis posuere morbi leo urna. Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
        </p><br/>
        <p>
          Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Lorem ipsum dolor sit amet. Ut tortor pretium viverra suspendisse potenti nullam ac. Turpis egestas integer eget aliquet nibh praesent tristique magna sit.
        </p><br/>
        <p>
          Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Ut tortor pretium viverra suspendisse potenti nullam ac. Turpis egestas integer eget aliquet nibh praesent tristique magna sit.
        </p>
        </div>
      </div>
    </main>
    </>
  );
}
 
export default Home;