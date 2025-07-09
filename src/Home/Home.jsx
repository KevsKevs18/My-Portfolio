import styles from "./Home.module.css";
import { useTypewriter } from "react-simple-typewriter";
import { section } from "react-scroll";

const Home = ({ name }) => {
  const [text] = useTypewriter({
    words: ["Poging Front End Developer", "Poging Tao", "Poging Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  return (
    <section name={name} className={styles.home} id="home">
      <div className={`container ${styles.homecontainer}`}>
        <div className={styles.left}>
          <h3>Hello I'm</h3>
          <h1>
            <span>Kevin</span>
          </h1>
          <h3>
            And I'm a <span className="multipletext">{text}</span>
          </h3>
          <p>
            {" "}
            "I'm motivated by a profound passion for technology and a strong
            willingness to learn."
          </p>
          <div className="social-icons-container">
            <div className={styles["social-icons"]}>
              <a href="">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="">
                <i className="ri-github-line"></i>
              </a>
            </div>
            <button className="btn overlay" id="btn">
              <span>Hire me</span>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/Kevin.JPG" alt="My Picture" />
        </div>
      </div>
    </section>
  );
};

export default Home;
