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
                <img src="images/dominos.jpg" alt="dominos"/>
              </figure>
            </div>

            <div class="card-content">  
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Dominos || <a href="https://sei-dominos.surge.sh/" rel="noreferrer" target="_blank">Launch App</a></p>
                </div>
              </div>
              <div class="content">
                A web browser-based game of dominoes versus a computer.
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
                  <p class="title is-4">Lingua || <a href="https://sei-lingua-app.herokuapp.com/" rel="noreferrer" target="_blank">Launch App</a></p>
                </div>
              </div>
              <div class="content">
                Lingua is a repository of FREE language learning resources for all language learners. Google OAuth required.
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
                  <p class="title is-4">Genshin Builds || <a href="https://genshin-team-builder.herokuapp.com/" rel="noreferrer" target="_blank">Launch App</a></p>
                </div>
              </div>
              <div class="content">
                An application where you, the user, can create your own hypothetical team builds in Genshin Impact.
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
                  <p class="title is-4">J'ai Faim, Je Mange || <a href="https://jai-104.herokuapp.com/" rel="noreferrer" target="_blank">Launch App</a></p>
                </div>
              </div>
              <div class="content">
                A Python/Django web application for users to search, collect, and add their favorite recipes to share with others.
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