// import { useEffect, useRef, useState } from 'react'
// import Typed from 'typed.js'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  // window.onscroll = (()=>{
  //   console.log(document.documentElement.scrollTop)
  // })



  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App




// const el = useRef(null)

// const [text, setText] = useState('')

// useEffect(() => {
//   const typed = new Typed(el.current, {
//     strings: ['One', 'Two', 'Three'],
//     typeSpeed: 150
//   })

//   return () => {
//     typed.destroy()
//   }

// }, [])

// return (
//   <div>
//     <h1>
//       Hello world
//     </h1>
//     <div>
//       <span ref={el} />
//       <h2>{text}</h2>
//     </div>
//   </div>
// )