import ProductListItem from "./ProductListItem"

const ProductList = (props) => {

    const {products} = props

    const productsJSX = products.map(
        p => <ProductListItem key={p.id} name={p.name} id={p.id}></ProductListItem>
    )

    return (
        <div>
            <ul>
                {productsJSX}
            </ul>
        </div>
    )
}

export default ProductList