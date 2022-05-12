import './Cart.css';
import imageIncrease from '../graphics/arrow-up.svg';
import imageDecrease from '../graphics/arrow-down.svg';

import CartSubmit from './CartSubmit.jsx';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Cart() {
    const CartContent = useSelector((state) => { return state.CartContent });
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalCounter = 0;
        for(let i = 0; i < CartContent.length;) {
            totalCounter += CartContent[i].price * CartContent[i].quantity;
            i++;
        }

        setTotalPrice(totalCounter);
    }, [CartContent]);

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
                    <div className="cartQuantity"><img src={ imageIncrease } className="IncDe" alt="add" /><br />{ product_array.quantity }<br /><img src={ imageDecrease } className="IncDe" alt="remove" /></div>
                </div>
            )) }
            <div className="cartItem">
                <div className="cartTitlePrice">
                    <span className="cartTitleSpan">Total</span>
                    <span className="cartDotsSpan">&nbsp;</span>
                    <p className="cartPriceSpan">inkl. moms + drönarleverans</p>
                </div>
                <div className="cartTotalPrice">{ totalPrice } kr</div>
            </div>
            <CartSubmit />
        </div>
        </>
    );
}

export default Cart;