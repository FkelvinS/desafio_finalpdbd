import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
        "https://fakestoreapi.com/products"
    );

        if (!response.ok) {
          throw new Error("Não foi possível carregar os produtos.");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
}

    fetchProducts();

    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  if (loading) {
  return (
    <>
      <Header />
      <main>
        <h2>Carregando produtos...</h2>
      </main>
    </>
  );
}
  if (error) {
  return (
    <>
      <Header />
      <main>
        <h2>{error}</h2>
      </main>
    </>
  );
}

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
      );    
  return (
    <>
      <Header />

      <main>
        <h2>Produtos</h2>
        <CategoryFilter
  categories={categories}
  selectedCategory={selectedCategory}
  onSelectCategory={setSelectedCategory}
/>
        <div className="products-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;