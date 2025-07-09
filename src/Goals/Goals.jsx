import styles from "./Goals.module.css";
import { Element } from "react-scroll";

const Goals = ({ name }) => {
  return (
    <Element name={name} className={styles.goals}>
      <div className={`container ${styles.goalscontainer}`}>
        <div className={styles.card}>
          <div className={styles.carditem}>
            <img src="./Mission.JPG" alt="picture" className={styles.cardimage} />
            <h3 className={styles.cardtitle}>My Goals</h3>
            </div>
            <ul className={styles.goallist}>
              <li>
                I have mastered the fundamentals of HTML, CSS, and JavaScript.
              </li>
              <li>
                I build responsive layouts using Flexbox and CSS Grid with
                confidence.
              </li>
              <li>
                I am proficient in a front-end framework like React (or
                Vue/Svelte).
              </li>
              <li>
                I have built multiple real-world projects that showcase my
                skills.
              </li>
              <li>
                I use Git and GitHub for version control and collaboration.
              </li>
            </ul>
          
        </div>

        <div className={styles.card}>
          <div className={styles.carditem}>
            <img src="./Goal.JPG" alt="picture" className={styles.cardimage} />
            <h3 className={styles.cardtitle}>Mission</h3>
            </div>
            <ul className={styles.missionlist}>
              <li>Build intuitive, accessible experiences for all users.</li>
              <li>Write clean, maintainable, and scalable code.</li>
              <li>Stay curious and current.</li>
              <li>Solve real problems with thoughtful design and code.</li>
              <li>Collaborate with empathy and clarity.</li>
              <li>Share knowledge and uplift others.</li>
              <li>Own my work and ship with confidence.</li>
            </ul>
          
        </div>

        <div className={styles.card}>
          <div className={styles.carditem}>
            <img src="./Vision.png" alt="picture" className={styles.cardimage} />
            
            <h3 className={styles.cardtitle}>Vision</h3>
            </div>
            <p className={styles.vision}>
              "To craft meaningful, accessible, and performant web experiences
              that empower users, solve real problems, and leave a lasting
              positive impact on the world."
            </p>
          </div>
        </div>
     
    </Element>
  );
};

export default Goals;
