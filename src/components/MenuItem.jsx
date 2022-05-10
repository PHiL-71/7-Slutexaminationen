import './MenuItem.css';

import { useDispatch } from "react-redux";

import { addProduct } from '../actions/airbeanActions.jsx';

function MenuItem({ id, title, desc, price }) {
    const dispatch = useDispatch();

    function AddToCart(id, title, desc, price) {
        dispatch(
            addProduct({
                id: id,
                title: title,
                desc: desc,
                price: price,
                quantity: 1
            })
        );
    }

    return(
        <div className="menuItemMain">
            <div className="menuItemAdd">
                <button className="menuItemAddButton"  onClick={ () => AddToCart(id, title, desc, price) }></button>
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