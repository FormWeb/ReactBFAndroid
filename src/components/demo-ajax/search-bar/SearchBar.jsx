import { useState } from "react"

const SearchBar = (props) => {

    const { onSearch } = props

    const [input, setInput] = useState("")

    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={() => onSearch(input)}>Search</button>
        </div>
    )
}

export default SearchBar