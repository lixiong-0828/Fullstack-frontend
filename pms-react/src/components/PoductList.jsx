import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, addList, delProduct, counter }) => {

    return (
        <>
            <div className='m-6 shadow-mg' >
                <h2 className="text-3xl"> product list</h2>
                <ul className="space-y-3">
                    {
                        products.map(
                            (product) => {
                                return <li key={product.id} className="flex justify-between items-center bg-gray-400 p-3 rounded-lg">
                                    <Link to={`/product/${product.id}`} >id: {product.id}, name:{product.name} , price :{product.price}</Link>
                                    <button onClick={() => { delProduct(product.id) }}
                                        className="mt-4 bg-blue-300 text-white py-2 px-2 rounded-lg hover:bg-blue-900"> delProduct </button>
                                </li>
                            }
                        )
                    }

                </ul>

                <button onClick={addList}>Add List</button>
            </div>


        </>

    )
}

export default ProductList