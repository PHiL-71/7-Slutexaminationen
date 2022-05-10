import './Menu.css';
import menuHeader from '../graphics/graphics-header.svg';
import menuFooter from '../graphics/graphics-footer.svg';

import MenuItem from './MenuItem.jsx';
import Cart from './Cart.jsx';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Menu({ cartDisplay }) {
    const [products, setProducts] = useState([{}]);
    const CartContent = useSelector((state) => { return state.CartContent });
    const [displayCartRouter, setDisplayCartRouter] = useState(cartDisplay);
    const [displayCart, setDisplayCart] = useState(cartDisplay);

    useEffect(() => {
        async function getProducts() {
          //const response = await fetch("http://localhost:5000/api/beans");
          //const response = await fetch("http://192.168.2.227:5000/api/beans"); /* To test on phone */
          const response = await fetch("http://192.168.0.28:5000/api/beans"); /* To test at work */
          const data = await response.json();
          setProducts(data.menu);
        }
        getProducts();
    }, []);

    function changeCartDisplay() {
        setDisplayCartRouter(false);
    }

    return(
        <>
        { displayCart === true  || displayCartRouter === 'yes'
            ? <Cart />
            : null
        }

        <div className="menuMain">
            <div className="menuHeader">
                <img className="menuHeader" src={ menuHeader } alt="menu_header" />
                <button className="menuCart" onClick={ () => { setDisplayCart((s) => !s); changeCartDisplay() } }></button>
                <div className="menuCartCounter">
                    { CartContent.length }
                </div>
            </div>
            <div className="menuTitle">
                Meny
            </div>
            {
                products.map((product, i) => {
                    return (
                        <MenuItem key={ i } id={ product.id } title={ product.title } desc={ product.desc } price={ product.price } />
                    );
                })
            }
            <div className="menuFooter">
                <img className="menuFooter" src={ menuFooter } alt="menu_footer" />
            </div>
        </div>
        </>
    );
}

export default Menu;