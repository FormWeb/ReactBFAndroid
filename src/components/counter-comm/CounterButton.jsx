import { useState } from "react"

const CounterButton = (props) => {

    const { clickReset, clickAdd } = props

    // State
    const [incr, setIncr] = useState(1)

    const handleAdd = () => {
        clickAdd(incr)
    }

    const handleReset = () => {
        clickReset(42)
    }

    return (
        <div>
            <input type="text" value={incr} onChange={e => setIncr(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CounterButton