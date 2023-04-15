import { Col } from "react-bootstrap"

const ProjectDetail = ({ title, description, imgLink }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgLink} alt="project-image" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectDetail


