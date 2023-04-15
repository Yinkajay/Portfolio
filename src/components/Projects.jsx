import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import ProjectDetail from "./ProjectDetail"

// import project images
import react from '../assets/images/react.svg'

// import background image 

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'this was a nice project',
            imgLink: react
        },
        {
            title: 'Project 2',
            description: 'this was a nice project',
            imgLink: react
        },
        {
            title: 'Project 3',
            description: 'this was a nice project',
            imgLink: react
        }
    ]

    return (
        <>
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea incidunt natus! Pariatur esse eos nemo. Hic sapiente dignissimos, omnis voluptatem explicabo, amet tempore aperiam et consectetur ipsum cumque est!</p>
                            <Tab.Container id="projecs-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" id="project-tabs-tab-third">
                                            Tab Three
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projects.map((project, index) => {
                                                return (
                                                    <ProjectDetail key={index} {...project} />
                                                )
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        Lorem Ipsum
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        Lorem Ipsum
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img src="" alt="" />
            </section>
        </>
    )
}

export default Projects
