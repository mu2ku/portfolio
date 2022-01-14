import React from 'react';
import styles from '../Contact/Contact.module.css'

const Contact = () => {
  return (  
    <>
      <main> 
        <div className={styles.contact_container}>
          <div className={styles.contacts}>
            <p className={styles.love}>I'd love to hear from you!</p>
            <p>Feel free to contact me through any of the following avenues:</p>
            <div className={styles.icons}>
              <a href="mailto:gmutuku@gmail.com"><img src="images/gmail.svg" alt="gmail" /></a>
              <a href="https://www.linkedin.com/in/grace-mutuku/"><img src="images/linkedin.svg" alt="linkedin" /></a>
              <a href="https://github.com/mu2ku"><img src="images/github.svg" alt="github" /></a>
            </div>
            <div className={styles.resume_container}>
              <a href="images/resume.docx" download>
                <img id={styles.resume} src="images/resume.png" alt="resume" />
              </a>
              <button class="button is-warning"><a href="images/resume.pdf" download>Download Resume</a></button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
 
export default Contact;