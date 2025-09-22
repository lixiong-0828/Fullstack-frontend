import React from "react";

const ProductHeader = ({products}) =>{

    return(
        <>
            <h3>
                Product counter is : {products.length}
            </h3>
        </>
    )
}

export default ProductHeader
