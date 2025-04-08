
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const CommissionDetails: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1 px-3 text-sm">
              Lifetime Value
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Get <span className="text-gradient">30% Recurring</span> Commissions On Every Sale
            </h2>
            <p className="text-gray-600 mb-6">
              Unlike one-time commission programs, with Weenify you'll earn 30% of what your referrals pay, every month they remain a customer. That means your earnings compound over time as you refer more users.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-weenify-purple shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Lifetime Commissions</p>
                  <p className="text-gray-600">Earn passive income as long as your referrals remain customers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-weenify-purple shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">30% of All Plans</p>
                  <p className="text-gray-600">Earn from every subscription plan, including annual subscriptions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-weenify-purple shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Monthly Payouts</p>
                  <p className="text-gray-600">Get paid reliably every month via PayPal, Stripe, or bank transfer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl relative">
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white font-bold text-xl p-4 rounded-2xl shadow-lg">
              30%
            </div>
            <h3 className="text-2xl font-display font-bold mb-6">Commission Calculator</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 mb-2">If you refer 10 customers on the Pro plan ($49/mo):</p>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                    <p>Monthly: <span className="font-bold text-weenify-purple">$147</span></p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                    <p>Yearly: <span className="font-bold text-weenify-purple">$1,764</span></p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 mb-2">If you refer 50 customers on the Pro plan:</p>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                    <p>Monthly: <span className="font-bold text-weenify-purple">$735</span></p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                    <p>Yearly: <span className="font-bold text-weenify-purple">$8,820</span></p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 mb-2">If you refer 100 customers on the Pro plan:</p>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                    <p>Monthly: <span className="font-bold text-weenify-purple">$1,470</span></p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                    <p>Yearly: <span className="font-bold text-weenify-purple">$17,640</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionDetails;
