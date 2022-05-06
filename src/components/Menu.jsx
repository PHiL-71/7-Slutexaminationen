import './Menu.css';
import menuHeader from '../graphics/graphics-header.svg';
import menuFooter from '../graphics/graphics-footer.svg';
import Cart from './Cart.jsx';
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem.jsx';

function Menu() {
    const [products, setProducts] = useState([{}]); /* or {} to keep array? */

    useEffect(() => {
        async function getProducts() {
          //const response = await fetch("http://localhost:5000/api/beans");
          const response = await fetch("http://192.168.2.227:5000/api/beans"); /* To test on phone */
          const data = await response.json();
          setProducts(data.menu);
        }
        getProducts();
      }, []);

    return(
        <div className="menuMain">
            <div className="menuHeader">
                <img src={ menuHeader } alt="menu_header" />
                <Cart />
            </div>
            <div className="menuTitle">Meny</div>
            <div className="menuItems">
                {
                    products.map((product, i) => {
                        return (                           
                            <MenuItem key={ i } id={ product.id } title={ product.title } desc={ product.desc } price={ product.price } />
                        );
                    })
                }
            </div>
            <div className="menuFooter">
                <img src={ menuFooter } alt="menu_footer" />
            </div>
        </div>
    );
}

export default Menu;