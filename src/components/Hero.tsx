
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-hero-pattern">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4 text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Find <span className="text-gradient">Winning Products</span> For Your Dropshipping Store
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Weenify analyzes thousands of products in real-time to help you discover the next big seller for your Shopify store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-8 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient rounded-full shadow-lg shadow-weenify-purple/20 hover:shadow-weenify-purple/40 text-base">
                Install Chrome Extension <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-weenify-purple/30 text-base">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-4 text-sm text-gray-500 gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs">KL</div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs">SM</div>
              </div>
              <span>Trusted by 5,000+ dropshippers</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-float">
              <div className="bg-gray-800 text-white p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono bg-gray-700 rounded px-2 py-0.5 flex-grow text-center">
                  app.weenify.com
                </div>
              </div>
              <div className="bg-white p-4 md:p-6">
                <img 
                  src="/lovable-uploads/d6209778-d743-4451-bfda-4abbe1e54a21.png" 
                  alt="Weenify Dashboard Preview" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[10%] bg-weenify-purple/20 blur-2xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
