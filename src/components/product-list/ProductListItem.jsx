const ProductListItem = (props) => {
    const {id, name} = props

    return (
        <div>
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    )
}

export default ProductListItem