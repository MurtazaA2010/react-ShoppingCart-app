import './css/hero.css'
import Products from '../JSON/Products.json' 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
    const Desktop = ({addToCart}) => {
        const filteredProducts = Products.filter((product) => product.Categorie === 'Desktop');
    return (
        <div className="hero">
            <div className="laptops">
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
 
export default Desktop;