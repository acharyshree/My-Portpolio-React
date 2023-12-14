import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 ml-3 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "grey", color: "" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020-PRESENT"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              PES UNIVERSITY,Bangalore
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "grey", color: "" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">PUC</h3>
            <h4 className="vertical-timeline-element-subtitle">
              VIVEKA PU COLLEGE KOTA,UDUPI
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "grey", color: "" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2015 - 2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">SSLC</h3>
            <h4 className="vertical-timeline-element-subtitle">
              GHS HESKUTTURU,UDUPI
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;