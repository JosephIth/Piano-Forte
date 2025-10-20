import 'bootstrap/dist/css/bootstrap.min.css'
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import { useState } from "react"
import './App.css'
import { Carousel } from 'bootstrap';
import CarouselPage from './CarouselPage';
import Instrumento from "./components/Instrumento"
import { db } from "./data/db"


function App() {

  //const [data, setData] = useState(db)

    const{data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal} = useCart()
  
  return (
    <div> 

      <Header 
      cart = {cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
     />
      <CarouselPage/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
        {data.map((instrumento) =>(
          <Instrumento
            key={instrumento.id}
            instrumento = {instrumento}
            addToCart = {addToCart}
          />
        ))} 
        </div>       
      </main>

    </div>
  )
  
}

export default App