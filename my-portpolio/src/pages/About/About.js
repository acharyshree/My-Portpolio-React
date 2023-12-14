import React from "react";
import "./about.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
       <Jump> 
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-5 col-lg-6 col-xs-12 about-img">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-an-anime-with-glasses-and-scarves-image_2694420.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                similique sequi velit aperiam totam quis iusto? Deleniti,
                similique id, sunt porro eos neque ab sit nihil culpa labore
                perferendis autem rem nostrum asperiores laudantium corrupti
                atque voluptatibus voluptatum officiis. Soluta alias autem,
                commodi quos suscipit modi maiores possimus! Placeat maiores
                assumenda inventore vel doloribus, sunt non. Sequi, corporis
                harum dolorem numquam, quis nesciunt atque tempore quae?
                Quibusdam consequatur quidem pariatur hic, ipsam eum beatae
                labore tempora quis fugit? Vitae, aperiam velit.
              </p>
            </div>
          </div>
        </div>
      </Jump> 
    </>
  );
};

export default About;