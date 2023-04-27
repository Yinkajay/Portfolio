import { Col, Container, Row } from "react-bootstrap"
// import logo or image
import Memoji from '../assets/images/Memoji.svg'
// import navicon1
import LinkedIn from '../assets//images/NavLinkedIn.svg'
// import navicon2
import Hashnode from '../assets//images/NavHashnode.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={Memoji} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""> <img src={Hashnode} alt="social-link" /> </a>
                            <a href=""> <img src={LinkedIn} alt="social-link" /> </a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
