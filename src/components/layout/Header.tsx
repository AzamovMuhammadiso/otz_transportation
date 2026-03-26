import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Truck, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
    { path: "/quote", label: "Get a Quote" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-on-load">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            {/* <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Truck className="h-8 w-8 text-white" />
            </div> */}
            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                OTZ TRANSPORTATION
              </h1>
              <p className="text-xs text-gray-600">
                Reliable Freight Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
