
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Link, DollarSign } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1 px-3 text-sm">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How The <span className="text-gradient">Affiliate Program</span> Works
          </h2>
          <p className="text-gray-600 text-lg">
            Getting started is easy. Follow these simple steps to begin earning commissions with Weenify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-gray-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white w-8 h-8 flex items-center justify-center rounded-bl-lg font-bold">
              1
            </div>
            <CardContent className="p-6 pt-10">
              <div className="w-16 h-16 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-weenify-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-600">
                Register for the Weenify affiliate program. Approval is typically granted within 24 hours.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white w-8 h-8 flex items-center justify-center rounded-bl-lg font-bold">
              2
            </div>
            <CardContent className="p-6 pt-10">
              <div className="w-16 h-16 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
                <Link className="h-8 w-8 text-weenify-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Share Your Link</h3>
              <p className="text-gray-600">
                Promote Weenify using your unique affiliate link via email, social media, or your blog.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white w-8 h-8 flex items-center justify-center rounded-bl-lg font-bold">
              3
            </div>
            <CardContent className="p-6 pt-10">
              <div className="w-16 h-16 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-weenify-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Commissions</h3>
              <p className="text-gray-600">
                Get paid 30% of every payment your referrals make, for as long as they remain customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
