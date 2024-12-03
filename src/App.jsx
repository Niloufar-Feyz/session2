import React from "react";
import Product from "./components/Products";
import NavBar from "./components/NavBar";
import { products } from "./Data";
import './global.css';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <section className="row productList">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.image}
            discount={product.discount}
            badge={product.badge}
            rate={product.rating.rate}
             quantity={product.rating.count}
          />
        ))}
      </section>

      <Footer/>
    </>
  );
}

export default App;
