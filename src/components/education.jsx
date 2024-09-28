import "../css/education.css";

function Education() {
  return (
    <section id="education">
        <div className="eduTitle">
            <h2>Education</h2></div>
      <div className="qualification__sections">
            <div>
              <div className="qualification__data  ">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                </div>
                <div className="qualification__Details">
                  <h3 className="qualification__title">
                    Computer Science and Engineering
                  </h3>
                  <span className="qualification__subtitle"
                    >Jalpaiguri Government Engineering College</span
                  >
                  <div className="qualification__calendar">
                    {/* <i className="fa-regular fa-star"></i> */}
                    9.06 DGPA
                  </div>
                  <div className="qualification__calendar">
                    {/* <i className="fa-solid fa-calendar-days"></i> */}
                    2020 - 2024
                  </div>
                </div>
              </div>
            <div className="qualification__data  ">
                

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div className="qualification__Details">
                  <h3 className="qualification__title">Higher Secondary</h3>
                  <span className="qualification__subtitle"
                    >Aligunj R.R.B. Vidyalaya</span
                  >
                  <div className="qualification__calendar">
                    {/* <i className="fa-regular fa-star"></i> */}
                    92.8%
                  </div>
                  <div className="qualification__calendar">
                    {/* <i className="fa-solid fa-calendar-days"></i> */}
                    2018 - 2020
                  </div>
                </div>
              </div>
            <div className="qualification__data  ">
               <div >
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div className="qualification__Details">
                  <h3 className="qualification__title">Secondary</h3>
                  <span className="qualification__subtitle"
                    >Aligunj R.R.B. Vidyalaya </span>
                  <div className="qualification__calendar">
                    
                    89.1%
                  </div>
                  <div className="qualification__calendar">
                    
                    2014 - 2016
                  </div>
                </div>
              </div>
              
            </div>
          </div>
    </section>
  )
}

export default Education
