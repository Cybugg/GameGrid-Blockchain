const Winner = ({winner,reset}) => 
    <section className="w-full pb-24"> <p className="text-center font-bold text-3xl w-full">
        <span className="mt-4">{
            winner === -1
            ?   'No player won!!'
            :   `Player ${winner} won !!`}
        </span>
        <br/>
        <button className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-yellow-500 text-md px-8 py-1 my-2 rounded-full  border border-yellow-500" onClick={reset}>Play again?</button>
    </p></section>

   

export default Winner