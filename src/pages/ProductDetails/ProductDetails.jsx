import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header/Header";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  async function fetchProduct() {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Não foi possível carregar o produto.");
      }

      const data = await response.json();

      setProduct(data);
    } catch (error) {
      setError("Não foi possível carregar o produto.");
    } finally {
      setLoading(false);
    }
  }

  fetchProduct();
}, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <p className="loading-message">Carregando produto...</p>
      </>
    );
  }
  if (error) {
  return (
    <>
      <Header />

      <p className="error-message">
        {error}
      </p>
    </>
  );
  }

  return (
    <>
      <Header />

      <main className="product-details-page">
        <Link to="/" className="back-button">
          ← Voltar para os produtos
        </Link>

        <section className="product-details">
          <div className="product-details-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-details-info">
            <span className="product-category">
              {product.category}
            </span>

            <h2>{product.title}</h2>

            <p className="product-description">
              {product.description}
            </p>

            <p className="product-details-price">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;