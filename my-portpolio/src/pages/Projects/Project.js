import React from "react";
import "./Project.css";
import Fade from "react-reveal/Fade";
const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-13 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
        <Fade bottom> 
          <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Machine Learning</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Graph</span>
                  <span className="card-detail-badge">NLP</span>
                  <span className="card-detail-badge">Selenium</span>
                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Rumor Detection</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      
                      Food App
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Java Project</span>
                  <img
                    src="https://media.istockphoto.com/id/1315599813/photo/people-communication-network-concept-social-media.jpg?s=2048x2048&w=is&k=20&c=SiTifWbdyuxkH8gRq96XeG1CC99Tc33Y_SWCtHpzVUI="
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Java</span>

                  <span className="card-detail-badge">Patterns</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Social Media Application</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>        
           </Fade>
        </div>
      </div>
    </>
  );
};

export default Project;