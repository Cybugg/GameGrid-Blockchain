import { useEffect, useState } from "react";

const ActiveMarble = ({turn,dropped,setDropped,setTurn}) => {

    const [column,setColumn] = useState(3)
    const [row,setRow] = useState()

    const handleKeyDown = e => {
        if(e.keyCode === 37 && column > 0 ){
            setColumn(column-1)
        }
        else if(e.keyCode === 39){
            if (column === undefined)
                setColumn(1)
            else if (column < 6)
                setColumn(column+1)
        }
        else if(e.keyCode === 32 || e.keyCode === 13){
            if (dropped.find(drop => drop.x === 0 && drop.y === (column || 0))){
                return
            }
            else {
                const len = 5 - dropped.filter(drop => drop.y === (column || 0)).length
                setRow(len)
                setTimeout(() => {
                    setDropped([
                        ...dropped,
                        {x : len || 0, y:column || 0, player: turn}
                    ])
                    // setting turns
                    setTurn(turn === 1 ? 2 : 1)
                },500)
            }
        }
    }

    useEffect(() => {
        setColumn(3)
        setRow()
    },[turn])

    useEffect(() => {
        document.addEventListener("keyup", handleKeyDown, false);
        return () => document.removeEventListener("keyup", handleKeyDown);
    })

    return <div className={`active bg-opacity-50 p${turn} column-${column||'-'} row-${row===undefined ? '-' : row}`} />
}

export default ActiveMarble