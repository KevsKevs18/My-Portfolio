import styles from "./Navbar.module.css";
import { useRef } from "react";
import { Link } from 'react-scroll';


function Navbar(){

    const menuCheckboxRef = useRef(null);

    const closeMenu = () =>{
      if (menuCheckboxRef.current){
        menuCheckboxRef.current.checked = false;
    }
 
};

  return (
  
      <nav className={`container ${styles.navbar}`}>
          <h3>
          <span className="font-bold text-xl uppercase text-secondary shadow-neu rounded-md px-8 py-[0.2rem] bg-background">
            KEVIN</span>
          </h3>
          <input type="checkbox" id={styles.toggler} ref={menuCheckboxRef}/>
          <label for={styles.toggler}><i className="ri-menu-line"></i></label>
          <div className={styles.menu}>
          <ul className={styles.navlist}>
            <li>
              <Link 
              to="home"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className={styles.navlink}
              activeClass={styles.active}>
                HOME
              </Link>
            </li>
            <li>
              <Link
              to="about"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className={styles.navlink}
              activeClass={styles.active}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
              to="goals"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className={styles.navlink}
              activeClass={styles.active}>
                GOALS
              </Link>
            </li>
            <li>
              <Link
              to="projects"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className={styles.navlink}
              activeClass={styles.active}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
              to="contact"
              onClick={closeMenu}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className={styles.navlink}
              activeClass={styles.active}>
                CONTACT
              </Link>
            </li>
          </ul>
          </div>
      </nav>
 
 
  );
}

export default Navbar;

