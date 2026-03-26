import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">OTZ TRANSPORTATION</h3>
                <p className="text-sm text-blue-200">Since 2010</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner for reliable freight transportation across the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/careers', label: 'Careers' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">Phone</p>
                  <a href="tel:+18005551234" className="text-white hover:text-orange-400 transition-colors">
                    1-800-555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">Email</p>
                  <a href="mailto:info@otztrans.com" className="text-white hover:text-orange-400 transition-colors">
                    info@otztrans.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">Address</p>
                  <p className="text-white">123 Logistics Way, Chicago, IL 60601</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-blue-100">24/7 Dispatch Available</p>
                <p className="text-white mt-2">Office Hours:</p>
                <p className="text-blue-100">Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-blue-100">Sat: 9:00 AM - 2:00 PM</p>
                <p className="text-blue-100">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-blue-200 text-sm">
            &copy; {currentYear} OTZ Transportation. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
