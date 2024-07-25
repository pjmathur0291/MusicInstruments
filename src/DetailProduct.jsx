// import React, { useState } from 'react';
// import { Link, useParams } from "react-router-dom"
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import './App.css'

// const DetailProduct = ({ productDetail, cart, addToCart }) => {
//     const { id } = useParams()
//     const findId = productDetail.find((i) => i.id === (parseInt(id)))
//     const saveMoney = parseInt(findId.previousPrice - findId.price)
//     const [count, setCount] = useState(1)

//     const inc = () => {
//         setCount(count + 1)
//         if (count >= 5) {
//             setCount(0)
//         }
//     }

//     const dec = () => {
//         setCount(count - 1)
//         if (count <= 0) {
//             setCount(0)
//         }
//     }

//     return (
//         <div>
//             <Navbar />
//             <div key={findId.id} className='detailMainPage'>
//                 <div className='displayDetailLeft'>
//                     <img src={findId.productImage} width={"500px"} height={"500px"} alt="" />
//                 </div>
//                 <div className='displayDetailRight'>
//                     <div className='displayProductName'>
//                         <h2>{findId.productName}</h2> <hr />
//                         <h3><b>Company: </b>{findId.Company}</h3>
//                         <div className='productPricing'>
//                             <span className='pricingHeading'>Previous Price:</span>
//                             <span> ₹</span>
//                             <span className='previousPricing'>{findId.previousPrice}</span>
//                         </div>
//                         <div className='productPricing'>
//                             <span className='pricingHeading'>Price:</span>
//                             <span> ₹</span>
//                             <span className='Pricing'>{findId.price}</span>
//                         </div>
//                         <div className='productPricing hr'>
//                             <span className='pricingHeading'>You Save:</span>
//                             <span> ₹</span>
//                             <span className='Pricing'>{saveMoney}</span>
//                         </div>
//                         <div className='aboutProduct'>
//                             <h3 className='aboutThisItem'>
//                                 About this item:
//                             </h3>
//                             <p>
//                                 {findId.productDetails}
//                             </p>
//                         </div>

//                         <div className='addToCart'>
//                             <button onClick={dec}>-</button>
//                             <span>{count}</span>
//                             <button onClick={inc}>+</button>
//                             <Link to={'/Cart'}>
//                                 <button className='addToCartBtn' onClick={() => addToCart(findId)}>Add To Cart</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// };

// export default DetailProduct;







import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import './App.css'

const DetailProduct = ({ productDetail, cart, addToCart }) => {
    const { id } = useParams()
    const findId = productDetail.find((i) => i.productId === (parseInt(id)))
    const saveMoney = parseInt(findId.previousPrice - findId.price)
    const [count, setCount] = useState(1)

    const inc = () => {
        setCount(count + 1)
        if (count >= 5) {
            setCount(0)
        }
    }

    const dec = () => {
        setCount(count - 1)
        if (count <= 0) {
            setCount(0)
        }
    }

    return (
        <div>
            <Navbar />
            <div key={findId.id} className='detailMainPage'>
                <div className='displayDetailLeft'>
                    <img src={findId.productImage} width={"500px"} height={"500px"} alt="" />
                </div>
                <div className='displayDetailRight'>
                    <div className='displayProductName'>
                        <h2>{findId.productName}</h2> <hr />
                        <h3><b>Company: </b>{findId.Company}</h3>
                        <div className='productPricing'>
                            <span className='pricingHeading'>Previous Price:</span>
                            <span> ₹</span>
                            <span className='previousPricing'>{findId.previousPrice}</span>
                        </div>
                        <div className='productPricing'>
                            <span className='pricingHeading'>Price:</span>
                            <span> ₹</span>
                            <span className='Pricing'>{findId.price}</span>
                        </div>
                        <div className='productPricing hr'>
                            <span className='pricingHeading'>You Save:</span>
                            <span> ₹</span>
                            <span className='Pricing'>{saveMoney}</span>
                        </div>
                        <div className='aboutProduct'>
                            <h3 className='aboutThisItem'>
                                About this item:
                            </h3>
                            <p>
                                {findId.productDetails}
                            </p>
                        </div>

                        <div className='addToCart'>
                            <button onClick={dec}>-</button>
                            <span>{count}</span>
                            <button onClick={inc}>+</button>
                            <Link to={'/Cart'}>
                                <button className='addToCartBtn' onClick={() => addToCart(findId)}>Add To Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default DetailProduct;
