import "../css/project.css";
import { Globe, Code } from "lucide-react";
function Project() {
  return (
    <section id="works">
      <h1 className="worksTitle">Projects</h1>
      <div className="worksImgs">
      <div className="one">
          <img src="/screenshot/s9.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
               <span className="projectTitle">MusicOla </span>
              a Music Website using Spotify Api, provides tracks from
              different type of albums, artists, playlists
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />
                <a href="https://sananda-musicola.netlify.app/"> Live</a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />{" "}
                <a href="https://github.com/19082002/MusicOla"> Source </a>
              </button>
            </div>
          </div>
        </div>
        <div className="one">
          <img src="/screenshot/s1.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
              <span className="projectTitle">Newon</span> a fully responsive and user-friendly e-commerce
              website that allows customers to browse, search, and purchase a
              wide range of clothing products
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />
                <a href="https://newon-beta.vercel.app/"> Live</a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />{" "}
                <a href="https://github.com/19082002/Newon">Source</a>
              </button>
            </div>
          </div>
        </div>
        <div className="one">
          <img src="/screenshot/s4.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
            <span className="projectTitle">Horizon </span>
              a simple weather app that provides users to view temperature in
              current location.
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />{" "}
                <a href="https://horizon-k3gz.vercel.app/">Live</a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />{" "}
                <a href="https://github.com/19082002/Horizon">Source</a>
              </button>
            </div>
          </div>
        </div>
        <div className="one">
          <img src="/screenshot/s3.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
            <span className="projectTitle">Expense Tracker </span>
              an application to keep track of all income and
              expenses with better visualization through pie charts and voice
              input interaction.
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />
                <a href="https://expense-tracker-flame-ten.vercel.app/">
                  {" "}
                  Live
                </a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />{" "}
                <a href="https://github.com/19082002/Expense-Tracker">Source</a>
              </button>
            </div>
          </div>
        </div>
        <div className="one">
          <img src="/screenshot/s7.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
              <span className="projectTitle">Sudoku Solver </span>
              helps the user to find solution of any valid
              sudoku puzzle.
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />
                <a href="https://19082002.github.io/Sudoku-Solver/home.html">
                  Live
                </a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />
                <a href="https://github.com/19082002/Sudoku-Solver">
                  Source
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="one">
          <img src="/screenshot/s6.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
              <span className="projectTitle">Sorting Visualizer </span>
              Visualize the working of the sorting algorithms by generating bar
              with random heights and then sorting them accordingly
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />
                <a href="https://sorting-visualizer-ten-woad.vercel.app/">
                  {" "}
                  Live
                </a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />
                <a href="https://github.com/19082002/sorting-visualizer">
                  {" "}
                  Source
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="one">
          <img src="/screenshot/s5.png" alt="project" className="worksImg" />
          <div className="intro">
            <span className="projectTitle">Snake Game </span>
          a simple game
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />
                <a href="https://19082002.github.io/Snake-Game/snake/home">
                  {" "}
                  Live
                </a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />
                <a href="https://github.com/19082002/Snake-Game">Source</a>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="one">
          <img src="/screenshot/s8.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
              <span className="projectTitle">To-Do List </span>
              you can save your work, can check
              whether it complete ir not you can update its status or can delete
              it.
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" />
                <a href="https://sananda-todo-list.netlify.app/"> Live</a>
              </button>
              <button className="projectbtn">
                <Code className="icon" />
                <a href="https://github.com/19082002/Todo-List">Source</a>{" "}
              </button>
            </div>
          </div>
        </div>
       
        <div className="one">
          <img src="/screenshot/food.png" alt="project" className="worksImg" />
          <div className="intro">
            <p>
              <span className="projectTitle">Food Hub </span>
               a simple Food Delivery app UI for Android, iOS using
              Flutter.
            </p>
            <div className="btns">
              <button className="projectbtn">
                <Globe className="icon" /> Live
              </button>
              <button className="projectbtn">
                <Code className="icon" />{" "}
                <a href="https://github.com/19082002/Food_Hub">Source</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="workBtn">See More</button> */}
    </section>
  );
}

export default Project;
