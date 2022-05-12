import './Cart.css';
import imageIncrease from '../graphics/arrow-up.svg';
import imageDecrease from '../graphics/arrow-down.svg';

import CartSubmit from './CartSubmit.jsx';
import { addOne } from '../actions/airbeanActions.jsx';
import { removeOne } from '../actions/airbeanActions.jsx';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

function Cart() {
    const CartContent = useSelector((state) => { return state.CartContent });
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const [discount, setDiscount] = useState('no');
    
    useEffect(() => {
        let totalCounter = 0;
        let checkForDiscount = [];

        for(let i = 0; i < CartContent.length;) {
            totalCounter += CartContent[i].price * CartContent[i].quantity;
            checkForDiscount.push(CartContent[i].id);
            i++;
        }

        if(
            checkForDiscount.length === 2 &&
            checkForDiscount.includes(1) &&
            checkForDiscount.includes(7) &&
            CartContent.find((item) => item.id === 1).quantity === 1 &&
            CartContent.find((item) => item.id === 7).quantity === 1
            ) {
                setDiscount('yes');
                totalCounter = 40;
        }
        else {
            setDiscount('no');
        }

        setTotalPrice(totalCounter);
    }, [CartContent]);

    function cartAddOne(product_id) {
        dispatch(
            addOne({
                id: product_id
            })
        );
    }

    function cartRemoveOne(product_id) {
        dispatch(
            removeOne({
                id: product_id
            })
        );
    }

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
                    <div className="cartQuantity"><img src={ imageIncrease } className="IncDe" onClick={ () => cartAddOne(product_array.id) } alt="add" /><br />{ product_array.quantity }<br /><img src={ imageDecrease } className="IncDe" onClick={ () => cartRemoveOne(product_array.id) } alt="remove" /></div>
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
            {
                discount === 'yes'
                ? <div className="cartTopic">Kampanjerbjudande!</div>
                : null
            }
            {
                totalPrice !== 0
                ? <CartSubmit />
                : null
            }
        </div>
        </>
    );
}

export default Cart;