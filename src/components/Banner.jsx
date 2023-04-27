import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import TrackVisibility from "react-on-screen"
// import Banner Image
import BannerImage from '../assets/images/BannerImage.webp'

const Banner = () => {
    const [loopIndex, setLoopIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [letterSpeed, setLetterSpeed] = useState(100 - Math.random() * 100)
    const period = 1000

    const toRotate = ['Frontend developer', 'Software Engineer' , 'App developer']

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, letterSpeed)

        return () => { clearInterval(ticker) }
    })

    const tick = () => {
        let i = loopIndex % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)
        if (isDeleting) {
            setLetterSpeed(prevSpeed => prevSpeed / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setLetterSpeed(period)
        } else if (isDeleting && updatedText == '') {
            setIsDeleting(false)
            setLoopIndex(loopIndex + 1)
            setLetterSpeed(500)
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__fadeIn" : ''}>
                                    <span className="tagline">Welcome.</span>
                                    <h1>Hello I'm Yinka, a <span className="wrap">{text}</span>
                                    </h1>
                                    <p>I'm a front-end web developer with a strong background in HTML, CSS, and JavaScript. I'm passionate about building engaging and aesthetically pleasing websites. I've also experimented with a number of frameworks, including JQuery, React, and Vue to name a few, and I'm always honing my abilities to remain on top of the most recent developments in web development.</p>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={BannerImage} alt="banner image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
