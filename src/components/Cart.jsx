import './Cart.css';

import CartSubmit from './CartSubmit.jsx';

import { useSelector } from 'react-redux';

function Cart() {
    const CartContent = useSelector((state) => { return state.CartContent });

    return(
        <>
        <div className="cartContentConnector"></div>
        <div className="cartMain">
            <p className="cartTopic">Din beställning</p>
            { CartContent.map((product_array, i) => (
                <div key={ i } className="cartItem">
                    <div className="cartTitlePrice">
                        <span className="cartTitleSpan">{ product_array.title }</span>
                        <span className="cartDotsSpan">&nbsp;</span>
                        <p className="cartPriceSpan">{ product_array.price * product_array.quantity } kr</p>
                    </div>
                    <div className="cartQuantity">{ product_array.quantity }</div>
                </div>
            ))}
            <div className="cartItem">
                <div className="cartTitlePrice">
                    <span className="cartTitleSpan">Total</span>
                    <span className="cartDotsSpan">&nbsp;</span>
                    <p className="cartPriceSpan">inkl. moms + drönarleverans</p>
                </div>
                <div className="cartQuantity">x</div>
            </div>
            <CartSubmit />
        </div>
        </>
    );
}

export default Cart;