
import React from 'react';
import { Button } from '@/components/ui/button';

const AffiliateCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-weenify-purple/5 to-weenify-blue/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready To Start <span className="text-gradient">Earning?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our affiliate program today and start earning 30% recurring commissions on every sale you refer. Access your affiliate dashboard to track your earnings in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient rounded-full shadow-lg shadow-weenify-purple/20 hover:shadow-weenify-purple/40 text-base">
                Join Affiliate Program
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-weenify-purple/30 text-base">
                Access Affiliate Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateCTA;
