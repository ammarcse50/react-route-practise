
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>

               <Link to="/">Home</Link>
               <Link to="/about">about</Link>
               <Link to="/contact">Contact</Link>
               <Link to="/users">Users</Link>
            </nav>
            
        </div>
    );
};

export default Header;