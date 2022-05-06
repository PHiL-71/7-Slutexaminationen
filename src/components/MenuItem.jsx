import './MenuItem.css';
import imageAddtoCart from '../graphics/add.svg';

function MenuItem({ id, title, desc, price }) {
    return(
        <div className="menuItem">
            <div className="menuAdd">Addit</div>
            <div className="menuDesc">{ desc }</div>
            <div className="menuPrice">{ price }</div>
        </div>
    );
}

export default MenuItem;

/*
    <img src={ imageAddtoCart } className="imageAddtoCart" alt="image_addtocart" /> 
*/