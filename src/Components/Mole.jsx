import { useEffect } from 'react'
import mole from '../mole.png'

function Mole (props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout (() => {
            props.toggle(false)
        }, randSeconds)
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={mole} onClick={props.handleClick} alt='Mole' />
        </div>
    )
}

export default Mole;