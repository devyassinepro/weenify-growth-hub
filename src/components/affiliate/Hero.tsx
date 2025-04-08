
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const AffiliateHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1.5 px-3 text-sm font-medium">
            Weenify Affiliate Program
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Earn <span className="text-gradient">30% Recurring Commissions</span> For Life
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the Weenify affiliate program and earn generous commissions by recommending
            the ultimate dropshipping product research tool to your audience.
          </p>
          <Button size="lg" className="bg-gradient rounded-full shadow-lg shadow-weenify-purple/20 hover:shadow-weenify-purple/40 text-base">
            Join Affiliate Program <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AffiliateHero;
