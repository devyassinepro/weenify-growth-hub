
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Chrome } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-hero-pattern">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Find Your Next <span className="text-gradient">Winning Product</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join thousands of successful dropshippers who use Weenify to discover profitable products and scale their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient rounded-full shadow-lg shadow-weenify-purple/20 hover:shadow-weenify-purple/40 text-base">
              Try Free Trial
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-weenify-purple/30 text-base">
              <Chrome className="mr-2 h-4 w-4" /> Install Chrome Extension
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow text-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>No credit card required • 7-day free trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
