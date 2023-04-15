import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
// import headerimage

const Banner = () => {
    const [loopIndex, setLoopIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [letterSpeed, setLetterSpeed] = useState(300 - Math.random() * 100)
    const period = 2000

    const toRotate = ['Web Developer', 'App developer']

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
        if(isDeleting){
            setLetterSpeed(prevSpeed => prevSpeed/2)
        }

        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true)
            setLetterSpeed(period)
        }else if(isDeleting && updatedText ==''){
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
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hello I'm Yinka, <span className="wrap">{text}</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis officia corporis, quas veritatis asperiores rem magni officiis quo possimus corrupti totam quae! Sunt, hic totam mollitia dolorem repellat necessitatibus!</p>
                        <button onClick={() => console.log('clicked')}>Let's connect <ArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src="" alt="banner image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
