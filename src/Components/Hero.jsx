import './css/hero.css'
import  herosrc from './images/hero.jpg'
import Products from '../JSON/Products.json' 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
    const Hero = ({addToCart}) => {
        const filteredProducts = Products.filter((product) => product.Categorie === 'Laptop');
    return (
        <div className="hero">
            <img src={herosrc} alt="" className='hero-img' />

            <div className="laptops">
                <h3>Laptops at Best Price</h3>
                <p className='lap-buy'>Buy Latops from our store at the best price</p>
                <div className="cards">
                    {filteredProducts.map((product) => (
                        <div className="card" key={product.id}>
                            <Link to={`/products/${product.id}`} >
                                <img src={product.src1} alt="" className='card-img'/>
                                <p >{product.title}</p>  
                                <p className='price'>${product['new-price']}<br/><s>${product['old-price']}</s></p> 
                            </Link>                    
                            <button className='c-btn' onClick={()=> addToCart(product)}>Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    );
}
 
export default Hero;
