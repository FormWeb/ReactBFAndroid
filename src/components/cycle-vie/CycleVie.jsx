import { useEffect, useState } from "react"

const CycleVie = () => {

    const [message, setMessage] = useState("Bonjour")

    const handleClick = () => {
        if (message === "Bonjour") {
            setMessage("Au revoir")
        }
        else {
            setMessage("Bonjour")
        }
    }

    useEffect(() => {
        console.log("composant créé")

        return (
            console.log("composant détruit")
        )
    }, [message])

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default CycleVie