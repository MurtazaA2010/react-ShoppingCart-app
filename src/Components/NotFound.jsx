import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div>
            <h2>404~ Page Not Found</h2>
            <p>There is no page in that link or it has been moved to a new path</p>
            <Link to='/'>Go Back to homepage </Link>
        </div>
     );
}
 
export default NotFound;