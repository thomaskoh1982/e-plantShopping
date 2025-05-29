import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(true);
    const [addedToCart, setAddedToCart] = useState({});
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    const plantsArray = [
        // ... (keep the existing plantsArray data)
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart({ ...addedToCart, [plant.name]: true });
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
        setShowPlants(false);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
        setShowPlants(true);
    };

    // ... (keep the existing styleObj and styleObjUl)

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => onHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div><a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12" fill="#fff"></circle>
                                    <circle cx="184" cy="216" r="12" fill="#fff"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                                {cart.length > 0 && (
                                    <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                                )}
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            {showPlants && !showCart ? (
                <div className="product-grid">
                    {plantsArray.map(category => (
                        <div key={category.category} className="category-section">
                            <h2 className="category-title">{category.category}</h2>
                            <div className="plants-grid">
                                {category.plants.map(plant => (
                                    <div key={plant.name} className="plant-card">
                                        <img src={plant.image} alt={plant.name} className="plant-image" />
                                        <div className="plant-details">
                                            <h3 className="plant-name">{plant.name}</h3>
                                            <p className="plant-description">{plant.description}</p>
                                            <div className="plant-price">{plant.cost}</div>
                                            <button
                                                className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                                                onClick={() => handleAddToCart(plant)}
                                                disabled={addedToCart[plant.name]}
                                            >
                                                {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;