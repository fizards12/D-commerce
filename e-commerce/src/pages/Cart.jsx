import CartItem from "../components/CartItems/CartItem";
import { useSelector } from "react-redux";
import Button from "../components/UI/Button/Button";
const Cart = () => {
  const { totalPrice, products } = useSelector((state) => state.cart);
  return (
    <div className={`container m-auto p-3`}>
      <h1 className={`font-bold text-3xl`}>My Cart</h1>
      <div className="flex flex-col gap-5">
        <div className={`p-3 w-full max-w-lg flex flex-col gap-4 m-auto`}>
          {products &&
            products.map((p) => (
              <CartItem key={p.id}>
                <CartItem.Preview src={p.product.image} name={p.product.name} />
                <CartItem.Details
                  item={p}
                />
              </CartItem>
            ))}
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold">Total Price</h2>
          <span>${totalPrice}</span>
        </div>
        <div className="cart-actions flex gap-2">
          <Button>Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
