import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-700">MindBlow</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-purple-700 transition">Home</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-700 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;