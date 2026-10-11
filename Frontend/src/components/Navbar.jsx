import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-700 text-white p-4 shadow-lg border-b-4 border-yellow-500 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold tracking-wider drop-shadow-md">
          Travel<span className="text-yellow-300">Bharat</span>
        </Link>
        <div className="space-x-6 font-medium text-lg">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Explore</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;