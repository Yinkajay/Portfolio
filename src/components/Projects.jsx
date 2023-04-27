import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import ProjectDetail from "./ProjectDetail"

// import project images
import react from '../assets/images/react.svg'
import Phonie from '../assets/images/phonie.png'
import YoutubeClone from '../assets/images/youtube-clone.png'
import ProfileFetcher from '../assets/images/profile-fetcher.png'
import ReactMarkdown from '../assets/images/react-markdown.png'
import DynamicRepoFetcher from '../assets/images/dynamic-repo-fetcher.png'
import VueShop from '../assets/images/VueShop.png'

// import background image 

const Projects = () => {
    const projects1 = [
        {
            title: 'Phonie',
            description: 'Built with React. Works with the Github API to dynamically fetch a user and display all their info including their repositories',
            imgLink: Phonie,
            siteLink: 'https://yinkajay.github.io/phonie/'
        },
        {
            title: 'Youtube Clone',
            description: 'This Youtube clone was built with plain HTML & CSS. It is the desktop version of the youtube homepage.',
            imgLink: YoutubeClone,
            siteLink: 'https://yinkajay.github.io/Youtube-Clone/'
        }
        ,
        {
            title: 'My Github Profile Fetcher',
            description: 'Built with react and works with the github API',
            imgLink: ProfileFetcher,
            siteLink: 'https://github-repo-fetch.web.app/'
        }
    ]
    const projects2 = [
        {
            title: 'React Markdown Generator',
            description: 'Generates text output from Markdown input immediately. Built with React.',
            imgLink: ReactMarkdown,
            siteLink: 'https://tiny-dango-4a492a.netlify.app/'
        },
        {
            title: 'Dynamic Github Profile fetcher',
            description: 'A simple web app that gives the details of a given Github profile from a username. Built with React.',
            imgLink: DynamicRepoFetcher,
            siteLink: 'https://dynamic-repo-fetch.web.app/'
        }
    ]
    const projects3 = [
        {
            title: 'Vue shopping site',
            description: 'Allows users sign up and sign in with fake auth to view commercial items fetched from an API  ',
            imgLink: VueShop,
            siteLink: 'https://shoppa-app-vue3.web.app/home'
        },
    ]

    return (
        <>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Here are a few projects i've built.</p>
                            <Tab.Container id="projecs-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" id="project-tabs-tab-third">
                                            3
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Container>
                                            <Row>
                                                {projects1.map((project, index) => {
                                                    return (
                                                        <ProjectDetail key={index} {...project} />
                                                    )
                                                })}
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Container>
                                            <Row>
                                                {projects2.map((project, index) => {
                                                    return (
                                                        <ProjectDetail key={index} {...project} />
                                                    )
                                                })}
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Container>
                                            <Row>
                                                {projects3.map((project, index) => {
                                                    return (
                                                        <ProjectDetail key={index} {...project} />
                                                    )
                                                })}
                                            </Row>
                                        </Container>
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
