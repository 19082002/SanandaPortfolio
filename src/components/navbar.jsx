import { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-scroll";
import { Menu ,Download} from "lucide-react";

function Navbar() {
  const[showMenu,setShowMenu]=useState(false)
  return (
    <>
      <nav className="navbar">
        <img src="/icons/V.png" alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            to="intro"
            className="desktopListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skill"
            className="desktopListItem"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Skill
          </Link>
          <Link
            activeClass="active"
            to="works"
            className="desktopListItem"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="education"
            className="desktopListItem"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="contact"
            className="desktopListItem"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Contact
          </Link>
        </div>
        <button className="desktopBtn" onClick={() => {}}>
          <a href="https://drive.google.com/file/d/1BLE93kznVuHEQV9VWevDS_pXwsN32NOh/view?usp=drive_link">
         <Download className="icon"/> Resume
         </a>
        </button>
        <Menu className="nobMenu"  onClick={() => {setShowMenu(!showMenu);}}/>
        <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            to="intro"
            className="listItem"
            onClick={() => {setShowMenu(false);}}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skill"
            className="listItem"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Skill
          </Link>
          <Link
            activeClass="active"
            to="works"
            className="listItem"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onClick={() => {setShowMenu(false);}}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="education"
            className="listItem"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => {setShowMenu(false);}}
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="contact"
            className="listItem"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onClick={() => {setShowMenu(false);}}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
