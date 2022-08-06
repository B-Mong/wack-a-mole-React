import { useEffect } from 'react'
import MoleHill from '../molehill.png'

function EmptySlot (props) {
    useEffect(()=> {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="moleHills">
            <img style={{'width': '10vw'}} src={MoleHill} alt='Empty MoleHill'/>
        </div>
    )
}

export default EmptySlot