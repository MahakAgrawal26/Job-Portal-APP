import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth); // adjust path as per your setup

  return (
    <nav className="flex justify-between px-4 py-2 bg-gray-100 shadow-md">
      <Link to="/">Home</Link>
      
      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/profile">My Profile</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
