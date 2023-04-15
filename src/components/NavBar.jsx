import { useEffect, useState } from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
// import logo
import memoji from '../assets//images/memoji.svg'
// import navicon1
import NavLinkedIn from '../assets//images/NavLinkedIn.svg'
// import navicon2
import NavHashnode from '../assets//images/NavHashnode.svg'


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
    window.addEventListener('scroll', onscroll)

    return () => window.removeEventListener('onscroll', onscroll)
  })

  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={hasScrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: '50px' }} src={memoji} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('home') }}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('skills') }}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('projects') }}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yinka-junaid-a9a654171/"><img src={NavLinkedIn} alt="linkedin" /></a>
              <a href="https://adeyinka.hashnode.dev/"><img src={NavHashnode} alt="hashnode" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('clicked')}> <span>Let's Connect </span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar
