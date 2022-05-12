import './MenuItem.css';

import { useDispatch } from "react-redux";

import { addProduct } from '../actions/airbeanActions.jsx';

function MenuItem({ id, title, desc, price, quantity }) {
    const dispatch = useDispatch();

    function AddToCart(id, title, desc, price, quantity) {
        dispatch(
            addProduct({
                id: id,
                title: title,
                desc: desc,
                price: price,
                quantity: quantity
            })
        );
    }

    return(
        <div className="menuItemMain">
            <div className="menuItemAdd">
                <button className="menuItemAddButton"  onClick={ () => AddToCart(id, title, desc, price, quantity) }></button>
            </div>
            <div className="menuItemTitleDesc">
                <span className="menuItemTitle">{ title }</span><span className="menuItemDots"></span>
                <p className="menuItemDesc">{ desc }</p>
            </div>
            <div className="menuItemPrice">
                { price }
            </div>
        </div>
    )
}

export default MenuItem;