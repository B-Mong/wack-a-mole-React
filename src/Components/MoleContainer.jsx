import { useState } from 'react'
import Mole from './Mole.jsx'
import EmptySlot from './EmptySlot.jsx'

function MoleContainer (props) {
    let [theMole, setTheMole] = useState(false)  // State variable of a boolean to determine if the mole shows or not

    const handleClick = (e) => {  // Event listener to count a click on the mole and updates our score + sets the state of that mole to false so it can reset
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    
    // Uses a ternary operator to check the value of theMole. If it is true then it shows the mole, if false it hides the mole
    let displayMole = theMole ? <Mole setScore={props.score} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />



    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer