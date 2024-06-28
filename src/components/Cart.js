import { useSelector } from "react-redux";

const Cart =()=>{
    const cartItems = useSelector((store)=> store.cart.item);
    return (
    <div>
        {cartItems}
        {console.log(cartItems)}
    </div>
    )
}

export default Cart;