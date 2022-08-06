import './App.css'
import { useState } from 'react'
import MoleContainer from './Components/MoleContainer.jsx'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => { // Creates 10 mole containers/divs using a for loop and fills the Hills array with them
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }

    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="mainDiv">
      <div className="titleScore">
        <h1>React-a-Mole!</h1>
        <h2>{score}</h2>
      </div>
      <div>
        {createMoleHill()}
      </div>
    </div>
  )
}

export default App
