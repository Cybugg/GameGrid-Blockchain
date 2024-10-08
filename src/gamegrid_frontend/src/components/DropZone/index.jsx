
"use client"
import './DropZone.css'
import { cols, rows, size } from '../../constants/index'
import ActiveMarble from './ActiveMarble'
import Winner from './Winner'
import { useEffect, useState } from 'react';

const DropZone = ({turn,setTurn,p1Count, setP1Count,p2Count, setP2Count}) => {

  
    const [dropped,setDropped] = useState([])
    const [winner,setWinner] = useState(0)

    const reset = () => {
        setTurn(1)
        setDropped([])
        setWinner(0)
    }

    useEffect(
        ()=>{
            winner !==0 && winner===1?setP1Count(prev => prev+1):winner===2?setP2Count(prev => prev+1):""

        },[winner]
    )
    const findWinner = () => {
        const p1 = dropped.filter(d => d.player === 1)

        p1.forEach(({x,y}) => {
            if (p1.find(m => x === m.x + 1 && y === m.y) &&
                p1.find(m => x === m.x + 2 && y === m.y) &&
                p1.find(m => x === m.x + 3 && y === m.y)
            )
            setWinner(1)
            if (p1.find(m => x === m.x && y === m.y + 1) &&
                p1.find(m => x === m.x && y === m.y + 2) &&
                p1.find(m => x === m.x && y === m.y + 3)
            )
            setWinner(1)
            if (p1.find(m => x === m.x + 1 && y === m.y + 1) &&
                p1.find(m => x === m.x + 2 && y === m.y + 2) &&
                p1.find(m => x === m.x + 3 && y === m.y + 3)
            )
            setWinner(1)
            if (p1.find(m => x === m.x + 1 && y === m.y - 1) &&
                p1.find(m => x === m.x + 2 && y === m.y - 2) &&
                p1.find(m => x === m.x + 3 && y === m.y - 3)
            )
            setWinner(1)
        })

        const p2 = dropped.filter(d => d.player === 2)

        p2.forEach(({x,y}) => {
            if (p2.find(m => x === m.x + 1 && y === m.y) &&
                p2.find(m => x === m.x + 2 && y === m.y) &&
                p2.find(m => x === m.x + 3 && y === m.y)
            )
            setWinner(2)
            if (p2.find(m => x === m.x && y === m.y + 1) &&
                p2.find(m => x === m.x && y === m.y + 2) &&
                p2.find(m => x === m.x && y === m.y + 3)
            )
            setWinner(2)
            if (p2.find(m => x === m.x + 1 && y === m.y + 1) &&
                p2.find(m => x === m.x + 2 && y === m.y + 2) &&
                p2.find(m => x === m.x + 3 && y === m.y + 3)
            )
            setWinner(2)
            if (p2.find(m => x === m.x + 1 && y === m.y - 1) &&
                p2.find(m => x === m.x + 2 && y === m.y - 2) &&
                p2.find(m => x === m.x + 3 && y === m.y - 3)
            )
            setWinner(2)
        })
    }
    useEffect(() => {
        if(dropped.length === rows*cols)
            setWinner(-1)

       findWinner()

    },[dropped.length])

    return <div className="drop-zone">
        {dropped.map((m,i) => 
            <div key={i} 
                className={`p${m.player} bg-opacity-100 border-[3px] border-[rgb(184,184,184)]` }
                style={{transform:`translate(${m.y*size}px,${m.x*(size)+115}px)`}}>
            </div>
        )}
        {
            winner 
            ?   <Winner winner={winner} reset={reset}/>
            :   <ActiveMarble dropped={dropped} turn={turn} setDropped={setDropped} setTurn={setTurn} />
        }
    </div>     
}

export default DropZone