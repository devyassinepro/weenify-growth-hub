
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-weenify-purple to-weenify-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-display font-bold">Weenify</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="/#features" className="text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="/#winners" className="text-gray-500 hover:text-gray-900 transition-colors">Winning Products</a>
            <a href="/#testimonials" className="text-gray-500 hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="/#faq" className="text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
            <Link to="/affiliate" className="text-gray-500 hover:text-gray-900 transition-colors">Affiliate</Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700">Login</Button>
            </Link>
            <Button className="bg-gradient rounded-full shadow-lg shadow-weenify-purple/20 hover:shadow-weenify-purple/40">
              Install Chrome Extension
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
