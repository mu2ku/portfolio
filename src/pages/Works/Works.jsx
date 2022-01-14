import React from 'react';
import styles from '../Works/Works.module.css'

const Works = () => {
  return (  
    <>
      <main> 
      <div className={styles.works_container}>
        <div className={styles.works}>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="images/dominos.png" alt="dominos"/>
              </figure>
            </div>

            <div class="card-content">  
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Dominos || <a>Launch App</a></p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. 
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="images/lingua.png" alt="lingua"/>
              </figure>
            </div>

            <div class="card-content">  
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Lingua || <a>Launch App</a></p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. 
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="images/genshin.png" alt="genshin"/>
              </figure>
            </div>

            <div class="card-content">  
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Genshin Builds || <a>Launch App</a></p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. 
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="images/jai.png" alt="jai"/>
              </figure>
            </div>

            <div class="card-content">  
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">J'ai Faim, Je Mange || <a>Launch App</a></p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. 
              </div>
            </div>
          </div>



        </div>
      </div>
    </main>
    </>
  );
}
 
export default Works;