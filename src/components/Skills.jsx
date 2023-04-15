import { Col, Container, Row } from "react-bootstrap";
// import images for skills
import Javascript from '../assets//images/javascript.svg'
import React from '../assets//images/react.svg'
import Vue from '../assets//images/vue.svg'
import Node from '../assets//images/nodejs.svg'
import ReactNative from '../assets//images/react-native.svg'
import Git from '../assets/images/git.svg'

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'

// import background image for skills

const Skills = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit accusantium corporis consequuntur, dolorem aliquam saepe nam unde itaque rerum eveniet, aut quo soluta molestias, odio repudiandae aliquid? Quibusdam, perferendis!
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={Javascript} alt="skill 1" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={React} alt="skill 1" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={Vue} alt="skill 1" />
                  <h5>Vue</h5>
                </div>
                <div className="item">
                  <img src={Node} alt="skill 1" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={ReactNative} alt="skill 1" />
                  <h5>React-Native</h5>
                </div>
                <div className="item">
                  <img src={Git} alt="skill 1" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src="" alt="" />
    </section>
  )
}

export default Skills
