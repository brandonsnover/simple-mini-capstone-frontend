import { ProductsIndex } from "./ProductsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <h1>Body Title</h1>
      <ProductsIndex products={products} />
    </main>
  );
}
