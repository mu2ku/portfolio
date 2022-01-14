import React from 'react';
import styles from '../Contact/Contact.module.css'

const Contact = () => {
  return (  
    <>
      <main> 
        <div className={styles.contact_container}>
          <div className={styles.contacts}>
            <p>I'd love to hear from you!</p>
            <p>Feel free to contact me through any of the following avenues:</p>
            <div className={styles.icons}>
              <img src="images/gmail.svg" alt="gmail" />
              <img src="images/linkedin.svg" alt="linkedin" />
              <img src="images/github.svg" alt="github" />
            </div>
            <div className={styles.resume_container}>
              <a href="images/resume.docx" download>
                <img id={styles.resume} src="images/resume.png" alt="resume" />
              </a>
              <button class="button is-warning"><a href="images/resume.docx" download>Download Resume</a></button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
 
export default Contact;