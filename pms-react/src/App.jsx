import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/poductList'
import ProductHeader from './components/productsHeader'
import ProductDetail from './components/productDetail'
import { Routes ,Route} from 'react-router-dom'


let counterOfProduct = 0
let productName = 0
let productPrice = 0

const App = () => {

  const [products, setProducts] = useState([

  ])

  const addList = () => {
    counterOfProduct++
    productName = document.getElementById('productName').value
    productPrice = document.getElementById('productPrice').value

    const newProduct = { id: "" + counterOfProduct, name: productName, price: productPrice }
    setProducts(
      [
        ...products, newProduct,
      ]
    )

    document.getElementById('productName').value = ''
    document.getElementById('productPrice').value = ''
  }

  const delProduct = (id) => {
    const updatesProducts = products.filter(products => products.id !== id)
    setProducts(updatesProducts)

  }

  const say = 'welcome ,xiong again!';
  const readmessage = () => {
    return <p> from read message ! </p>
  }

  return (
    <>
      <Routes>
        <Route path='/' element ={
          <>
            <h1>
              {say}
            </h1>
            {readmessage()}
            <input type='test' id='productName' placeholder='product name'></input>
            <input type='test' id='productPrice' placeholder='price'></input>
            <ProductHeader products={products} />
            <ProductList products={products} addList={addList} delProduct={delProduct} counter={counterOfProduct} />
          </>
        } />

        <Route path='/product/:id' element = {<ProductDetail products = {products} />} />
        

        <Route>

        </Route>
      </Routes>


    </>
  )
}

export default App
