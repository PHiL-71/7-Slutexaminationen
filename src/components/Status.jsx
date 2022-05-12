import './Status.css';
import imageDrone from '../graphics/drone.svg';

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { emptyCart } from '../actions/airbeanActions.jsx';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

function Status() {
    const dispatch = useDispatch();
    const redirect = useNavigate();

    const { state } = useLocation();

    if(state === null) {
        return( <div className="error">You'll need to make a purchase to see status.<br /><br /><Link to="/">Go home</Link></div>)
    }
    else {
 
    const { eta, orderNr } = state;
    
    function BackToZero() {
        dispatch(emptyCart(true));
        redirect("/menu");
    }

    return(
        <div className="statusMain">
            <p className="orderNumber">Ordernummer <span className="orderNumber">#{ orderNr }</span></p>
            <img src={ imageDrone } alt="drone" />
            <p className="statusMessage">Din beställning<br />är på väg!</p>
            <p className="statusETA"><span className="statusETA">{ eta }</span> minuter</p>
            <button className="statusButton" onClick={ BackToZero }>Ok, cool!</button>
        </div>
    );
    }
}

export default Status;