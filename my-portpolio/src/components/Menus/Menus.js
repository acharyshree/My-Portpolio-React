import React from "react";
import "./menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {GrAchievement} from "react-icons/gr";
import { FaTrophy } from 'react-icons/fa';
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcApproval,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        
         <Zoom>
          
            <div className="navbar-profile-pic">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-an-anime-with-glasses-and-scarves-image_2694420.jpg"
                alt="profile pic"
              />
            </div>
         
          </Zoom>
          
          
           <Fade left> 
           
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                   <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  > 
                    <FcHome />
                    Home
                   </Link> 
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  > 
                    <FcAbout />
                    About
                   </Link> 
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  > 
                    <FcReadingEbook />
                    Education
                  </Link> 
                </div>

                <div className="nav-link">
                   <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  > 
                    <FcBiotech />
                    Skills
                  </Link> 
                </div>

                <div className="nav-link">
                   <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  > 
                    <FcVideoProjector />
                    Projects
                   </Link> 
                </div>
                <div className="nav-link">
                  <Link
                    to="achievements"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  > 
                    <FaTrophy  color="gold"/>
                    Achievements
                 </Link>
                </div>
                <div className="nav-link">
                   <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  > 
                    <FcBusinessContact />
                    Contacts
                   </Link> 
                </div>
              </div>
            </div>
        </Fade> 
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                 <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                > 
                  <FcHome title="Home" size="5x"/>
                 </Link>
              </div>
              <div className="nav-link">
                 <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" size="5x"/>
               </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                > 
                  <FcReadingEbook title="Education" size="5x" />
                 </Link> 
              </div>

              <div className="nav-link">
                 <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                > 
                  <FcBiotech title="skills"  size="5x"/>
                </Link> 
              </div>

              <div className="nav-link">
                 <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector  title="Projects" size="5x"/>
                </Link> 
              </div>
              <div className="nav-link">
               <Link
                  to="achievements"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                > 
                  <GrAchievement title="Achievements" size="5x" color="gold"/>
                 </Link> 
              </div>
              <div className="nav-link">
               <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                > 
                  <FcBusinessContact title="Contacts" size="5x" />
         </Link> 
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;