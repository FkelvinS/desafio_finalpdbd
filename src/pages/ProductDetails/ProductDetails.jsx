import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return (
      <>
        <Header />
        <p className="loading-message">Carregando produto...</p>
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
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;