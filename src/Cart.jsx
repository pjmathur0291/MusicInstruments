import React, { useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Cart = ({ cart, initialCart }) => {
    const [cartItem, setCartItem] = useState(initialCart)
    const [count, setCount] = useState(1)
    const inc = () => {
        setCount(count + 1)
        if (count >= 5) {
            setCount(1)
        }
    }

    const dec = () => {
        setCount(count - 1)
        if (count <= 1) {
            setCount(1)
        }
    }

    const deleteProduct = (id) => {
        setCartItem(cart.filter(item => item.id !== id))
    }
    return (
        <div>
            <Navbar />
            <div className="mainHeadingCart">
                <h1>
                    Shopping Cart
                </h1>
            </div>
            <div className="cartMain">
                <div className="cartleft">
                    {
                        cart.map((i) => (
                            <div key={i.id} className="cartLeftProductsDiv">
                                <div className="cartMainLeftImage">
                                    <img src={i.productImage} alt="" width={"260px"} height={"270px"} />
                                </div>
                                <div className="cartMainLeftContent">
                                    <h2>
                                        {i.productName}
                                    </h2>
                                    <h5>
                                        {i.Company}<br />
                                        <span className="fewInStocks">Few in stocks</span>
                                    </h5>
                                    <div className='addToCart cartValueBtn'>
                                        <button onClick={dec}>-</button>
                                        <span>{count}</span>
                                        <button onClick={inc}>+</button>
                                    </div>
                                    <div className="someMoreOptions">
                                        <span onClick={(id) => deleteProduct(i.id)}>Delete</span> |
                                        <Link to={'/'}>
                                            <span> Save For Later</span> |
                                        </Link>
                                        <Link to={'/AllProducts'}>
                                            <span> See More Like this</span> |
                                        </Link>
                                        <span> Share</span>
                                    </div>
                                    <div className='productPricing cartPrice'>
                                        <span> ₹</span>
                                        <span className='Pricing'>{i.price * count}</span>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        ))
                    }
                </div>
                <div className="cartMainRight">
                    <div className="cartMainRightMainBox">
                        <div className="cardDetails">
                            <h3>Card Details</h3>
                        </div>
                        <div className="cardType">
                            <h5>
                                Card Type
                            </h5>
                            <div className="cardIcons">
                                Here will comes the images of the cards as per the user
                            </div>
                        </div>

                        <div className="takeDetails">
                            <form className="formDetails">
                                <input type="text" name="" id="" placeholder="Cardholder's Name" />
                                <input type="text" name="" id="" placeholder="Card Number" />
                                <input type="text" name="" id="" placeholder="Exp." />
                                <input type="text" name="" id="" placeholder="Exp." />
                            </form>
                        </div>

                        <div className="pricingTotal">
                            <div className="pricingTotalLeft">
                                <h4>
                                    Subtotal
                                </h4>
                            </div>
                            <div className="pricingTotalRight">
                                <h4>
                                    Subtotal Value
                                </h4>
                            </div>
                        </div>


                        <div className="pricingTotal">
                            <div className="pricingTotalLeft">
                                <h4>
                                    Shipping
                                </h4>
                            </div>
                            <div className="pricingTotalRight">
                                <h4>
                                    Shipping Value
                                </h4>
                            </div>
                        </div>


                        <div className="pricingTotal">
                            <div className="pricingTotalLeft">
                                <h4>
                                    Total (Incl. taxes)
                                </h4>
                            </div>
                            <div className="pricingTotalRight">
                                <h4>
                                    Total Value
                                </h4>
                            </div>
                        </div>


                        <div className="checkoutButtonOnCart">
                            <button>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;
