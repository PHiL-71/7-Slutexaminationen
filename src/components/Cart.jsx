import './Cart.css';

function Cart() {
    return(
        <>
        <button className="cartBG"></button> { /* put onClick here to display full cart*/ }
        <div className="cartCountBG">0</div> { /* use counter here */ }
        </>
    );
}

export default Cart;