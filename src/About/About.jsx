import styles from "./About.module.css";
import React, { forwardRef } from "react";
import { section } from "react-scroll";

const About = ({ name }) => {
  return (
    <section name={name} className={styles.about}>
      <div className={`container ${styles.aboutcontainer}`}>
        <div className={styles.left}>
          <img src={`${import.meta.env.BASE_URL}/Kevin2.jpg`} alt="Picture of Kevin" />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>
              About <span>Me</span>
            </h2>
          </div>
          <h3>I'm a FullStack Web Developer</h3>
          <p>
            a skilled and creative web developer with a passion for creating
            beautiful, responsive, and user-friendly websites. I've worked on a
            variety of web projects, ranging from personal blogs to e-commerce
            platforms.
          </p>
          <button className={`btn overlay ${styles.btn}`}>
            <span>Download CV</span>
          </button>
          <div className={styles.skills}>
            <h2><span>My</span> Skills</h2>
          </div>

         
          <div className={styles.skillscontainer}>
            <p><span className="ri-html5-line" style={{fontSize: '24px' }}></span>
              HTML</p>
        
            <p><span className="ri-css3-fill" style={{fontSize: '24px' }}></span>
              CSS/TAILWIND</p>
         
            <p><span className="ri-reactjs-line" style={{fontSize: '24px' }}></span>
              REACT</p>
           
           <p> <span className="ri-javascript-fill" style={{fontSize: '24px' }}></span>
              JAVASCRIPT</p>

          </div>
          </div>
        </div>
      
      </section>
  );
};

export default About;