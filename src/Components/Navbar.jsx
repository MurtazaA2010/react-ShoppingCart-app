import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './css/navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="header">
                <h2><Link to='/'>TECH SHOP</Link></h2>
            </div>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/desktops'>Desktops</Link>
                <Link to='/laptops'>Laptops</Link>
                <Link to='/consoles'>Console</Link>
            </div>
            <div className="nav-btn">
                <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </div>
     );
}
 
export default Navbar;