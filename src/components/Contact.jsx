import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

const Contact = () => {
    const initFormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(initFormDetails)
    const [submitBtnText, setSubmitBtnText] = useState('Contact Me!')
    const [status, setStatus] = useState({})

    const onFormUpdate = (field, value) => {
        setFormDetails({ ...formDetails, [field]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitBtnText('Sending..')
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': "Application/json"
            },
            body: JSON.stringify(formDetails)
        })
        setSubmitBtnText('Contact Me!')
        let result = response.json()
        setFormDetails(initFormDetails)
        if (result.code === 200) setStatus({ success: true, message: 'Message sent!' })
        else setStatus({ success: false, message: 'Something went wrong' })

    }

    return (
        <>
            <section className="contact" id="connect">
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src="" alt="contact-image" />
                        </Col>
                        <Col md={6}>
                            <h2>Contact Me!</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6}> <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> </Col>
                                    <Col sm={6}> <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname', e.target.value)} /> </Col>
                                    <Col sm={6}> <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} /> </Col>
                                    <Col sm={6}> <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} /> </Col>
                                    <Col>
                                        <textarea value={formDetails.message} placeholder="Hello" rows="8" onChange={(e) => { onFormUpdate('message', e.target.value) }}></textarea>
                                        <button type="submit"><span>{submitBtnText}</span></button>
                                    </Col> {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
