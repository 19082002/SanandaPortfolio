import { Link } from "react-scroll";
import "../css/intro.css";
import { Facebook,Instagram, Linkedin,Github,Download} from "lucide-react";
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I am <span className="introName">Sananda</span>
          <br />
          Programmer
        </span>
        <p className="introPara">
          Passion for coding and problem-solving ,Proficient in  CPP, JAVA language<br />
          Skilled in web development technologies 
        </p>
        <Link to="contact">
          <button className="btn">Hire me</button>
        </Link>
        <Link>
        <button className="btn resumeBtn">
          <a href="https://drive.google.com/file/d/1BLE93kznVuHEQV9VWevDS_pXwsN32NOh/view?usp=drive_link">
         <Download className="icon"/> Resume
         </a>
        </button>
        </Link>
       
      </div>
      <div className="social">

        <div className="icons">
        <div className="line"></div>
         
          <div > <a href="https://www.linkedin.com/in/sananda-dey-2aa407203/"><Linkedin className="icon"/></a></div>
          <div ><a href="https://github.com/19082002"> <Github className="icon"/></a></div>
          <div > <a href="https://www.instagram.com/sananda_2002/"><Instagram className="icon"/></a></div>
          <div > <a href="https://www.facebook.com/profile.php?id=100053150651868"><Facebook className="icon"/></a></div>
        </div>
      </div>
      <img src="port3.JPG" alt="profile" className="bg" />
    </section>
  );
}

export default Intro;
