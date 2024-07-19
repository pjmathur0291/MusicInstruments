import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Accessories = ({accessories}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = accessories.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <Navbar />
            <div className="allProducts">
                <h1>Our Accessories</h1>
            </div>
            {currentProducts.map((i) => (
                <div key={i.id} className="productBoxAllProduct">
                    <div className="productBoxAllProductBox">
                        <div className="productBoxAllProductBoxLeft">
                            <img src={i.accessoriesImage} width={"60%"} height={"100%"} alt="" />
                        </div>
                        <div className="productBoxAllProductBoxRight">
                            <div className="allProductsName">
                                <h2>{i.accessoriesName}</h2>
                            </div>
                            <div className='productPricing'>
                                <span className='pricingHeading'>Price:</span>
                                <span> ₹</span>
                                <span className='Pricing'>{i.price}</span>
                            </div>
                            <div className='aboutProductAllProducts'>
                                <h3 className='aboutThisItem'>About this item:</h3>
                                <p>{i.accessoriesDetails}</p>
                            </div>
                            <div className="allProductsAddToCartBtn">
                                <Link to={`/DetailProduct/${i.accessoriesId}`}><button>More Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="pagination">
                {[...Array(Math.ceil(accessories.length / productsPerPage)).keys()].map(number => (
                    <button key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
            <Footer />
        </div>
    )
};

export default Accessories;
