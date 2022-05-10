import './CartSubmit.css';

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function CartSubmit() {
    const products = useSelector((state) => state.CartContent);
    const redirect = useNavigate();

    function submitOrder() {
        //fetch("http://localhost:5000/api/beans", {
        //fetch("http://192.168.2.227:5000/api/beans", { /* To test on phone */
        fetch("http://192.168.0.28:5000/api/beans", { /* To test at work */
          method: "POST",
          body: JSON.stringify(products),
        })
          .then((response) => response.json())
          .then((data) => {
            redirect("/status", {
              state: {
                eta: data.eta,
                orderNr: data.orderNr,
              },
            });
          });
      }

    return(
        <div className="cartSubmitDiv"><button className="cartSubmit" onClick={ submitOrder }>Take my money!</button></div>
    );
}

export default CartSubmit;