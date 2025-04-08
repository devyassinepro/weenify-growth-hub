
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-weenify-purple to-weenify-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-display font-bold">Weenify</span>
            </Link>
            <p className="text-gray-600 mb-4">
              The ultimate dropshipping product research tool for finding winning products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-weenify-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-weenify-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-weenify-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-weenify-purple transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-weenify-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-weenify-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-weenify-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-weenify-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-weenify-purple transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-weenify-purple transition-colors">Product Updates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-weenify-purple transition-colors">Tutorials</a></li>
              <li><Link to="/affiliate" className="text-gray-600 hover:text-weenify-purple transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/legal" className="text-gray-600 hover:text-weenify-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-weenify-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-weenify-purple transition-colors">Cookie Policy</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-weenify-purple transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Weenify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
