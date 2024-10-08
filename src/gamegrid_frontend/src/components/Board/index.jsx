import './index.css'
import {rows, cols} from "../../constants";


export default function Board() {
        const board = new Array(rows)
        .fill()
        .map(_ => new Array(cols).fill(''))

        return (
            <section className='flex items-center justify-center gap-12 '>
                
                {/* Board */}
              <div className="board overflow-hidden rounded-3xl border border-orange-950 shadow-xl">
        {board.map((row,i) => 
            row.map((_,j) => <div key={i+'-'+j}/>)
        )}
    </div> </section>
           
          )
}