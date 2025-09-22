import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetail = ({products}) => {

    const {id} = useParams()
    const product = products.find(p => p.id === parseInt(id))

    const navigate = useNavigate()

    return(
        <>
        <h2>Product Detail</h2>
        <p>product name : {product}</p>
        {/* <button onClick={ () => {navigate(-1)}}>go back</button> */}
        <Link to ="/"><button>go back </button></Link>
        </>
    )

}

export default ProductDetail