import { Col } from "react-bootstrap"

const ProjectDetail = ({ title, description, imgLink, siteLink }) => {
    return (
        <Col sm={6} >
            <div className="proj-imgbx">
                <img src={imgLink} alt="project-image" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <button><a href={siteLink}>Visit Site</a></button>
                </div>
            </div>
        </Col>
    )
}

export default ProjectDetail


