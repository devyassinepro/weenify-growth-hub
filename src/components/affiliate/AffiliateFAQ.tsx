
import React from 'react';
import { Badge } from '@/components/ui/badge';

const AffiliateFAQ: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1 px-3 text-sm">
            Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about the Weenify affiliate program
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">How do I get paid?</h3>
            <p className="text-gray-600">
              We offer payments via PayPal, Stripe, or direct bank transfer. You can select your preferred method in your affiliate dashboard.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold">What is the cookie duration?</h3>
            <p className="text-gray-600">
              Our affiliate cookies last for 60 days, giving you ample time to receive credit for your referrals.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold">When do I get paid?</h3>
            <p className="text-gray-600">
              Payments are processed on the 1st of each month for the previous month's commissions, with a minimum payout threshold of $50.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold">How long does approval take?</h3>
            <p className="text-gray-600">
              Applications are typically reviewed and approved within 24-48 hours. You'll receive an email notification upon approval.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold">Can I promote using paid ads?</h3>
            <p className="text-gray-600">
              Yes, you can use paid advertising to promote Weenify. However, bidding on branded keywords is not permitted.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold">What marketing materials are available?</h3>
            <p className="text-gray-600">
              We provide banners, email templates, social media graphics, and product screenshots in your affiliate dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateFAQ;
