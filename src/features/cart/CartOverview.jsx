import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuatity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuatity) return null;

  return (
    <div className="md:text-base- flex items-center justify-between bg-stone-800 p-4 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="sm:space-6 space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuatity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
