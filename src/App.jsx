import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
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