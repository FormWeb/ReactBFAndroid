import "./Welcome.css"

const Welcome = function(props) {

    // Props
    const { firstName, lastName } = props
    // const firstName = props.firstName
    // const lastName = props.lastName

    return (
        <h1>Hello {firstName} {lastName}</h1>
    )
}

Welcome.defaultProps = {
    lastName: "Pokemon"
}

export default Welcome