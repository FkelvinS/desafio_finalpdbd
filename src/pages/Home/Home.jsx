import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Header />

      <main>
        <h2>Produtos</h2>

        <div className="products-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;