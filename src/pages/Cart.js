import { useDispatch, useSelector } from "react-redux";
import RestaurantList from "../components/RestaurantList";
import { clearCart, removeItem } from "../utils/redux/store-slices/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    const index= cart.indexOf(item);
    dispatch(removeItem(index));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="justify-center my-5">
      <div className="font-extrabold text-4xl text-center my-2">CART</div>
      {cart.length > 0 ? (
        <div className="w-6/12 m-auto p-2 border">
          {cart?.map((value, index) => {
            return (
              <div
                key={value.item.card.info.id + index}
                className="border border-b my-2"
              >
                <RestaurantList item={value.item} />
                <button
                  className="bg-red-600 text-white px-2 m-2 rounded-lg"
                  onClick={() => handleRemove(value)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="bg-red-600 text-white  p-2 m-2 rounded-lg mx-[40%]"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <div className="font-mono font-bold text-xl w-6/12 m-auto p-2 text-center">
          Your cart is empty
          <div className=" text-xs mt-5 p-2 ">
            You can go to home page to view more restaurants
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
