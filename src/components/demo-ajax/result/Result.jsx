import axios from "axios"
import { useEffect, useState } from "react"

const Result = (props) => {

    const { name } = props

    const [age, setAge] = useState(0)

    useEffect(() => {
        axios.get("https://api.agify.io/?name=" + name)
            .then(({ data }) => {
                setAge(data.age)
            })
            .catch()
            .finally()
    }, [name])

    return (
        <div>
            <h1>{name} : {age} ans</h1>
        </div>
    )
}

export default Result