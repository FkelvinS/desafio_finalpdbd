import Header from "../../components/Header/Header";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const total = cart.reduce(
  (accumulator, product) =>
    accumulator + product.price * product.quantity,
  0
);
  return (

    <>
      <Header />

      <main className="cart-page">

        <h2>Meu Carrinho</h2>

        {cart.length === 0 ? (

            <p>Seu carrinho está vazio.</p>

    ) : (

        cart.map((product) => (

            <div key={product.id} className="cart-item">

                <img
                src={product.image}
                alt={product.title}
                />

                <div>

                    <h3>{product.title}</h3>

                    <p>
                        {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        })}
                    </p>

                    <div className="quantity-control">

                        <button
                        onClick={() => decreaseQuantity(product.id)}
                        >

                        -

                        </button>

                        <span>{product.quantity}</span>

                        <button
                        onClick={() => increaseQuantity(product.id)}
                        >

                        +

                        </button>

                    </div>
                    
                    <button
                        className="remove-button"
                        onClick={() => removeFromCart(product.id)}
                    >
                        Remover
                    </button>

                </div>
                <div className="cart-total">

                    <h2>
                        Total:
                        {" "}
                        {total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        })}
                    </h2>

                    <button
                        className="clear-cart-button"
                        onClick={clearCart}
                    >
                        Limpar Carrinho
                    </button>
                </div>

            </div>

    ))

  )}

</main>
    </>
  );
}

export default Cart;