
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      period: "per month",
      description: "Perfect for beginners just starting with dropshipping",
      features: [
        { name: "Product Research Database", included: true },
        { name: "Market Trend Analysis", included: true },
        { name: "5 Products Import per Day", included: true },
        { name: "Basic Competitor Tracking", included: true },
        { name: "Email Support", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Unlimited Product Imports", included: false },
      ],
      buttonText: "Start Basic Plan",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "For serious dropshippers ready to scale",
      features: [
        { name: "Product Research Database", included: true },
        { name: "Market Trend Analysis", included: true },
        { name: "50 Products Import per Day", included: true },
        { name: "Advanced Competitor Tracking", included: true },
        { name: "Priority Email Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Unlimited Product Imports", included: false },
      ],
      buttonText: "Start Pro Plan",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For power users with high-volume stores",
      features: [
        { name: "Product Research Database", included: true },
        { name: "Market Trend Analysis", included: true },
        { name: "Unlimited Products Import", included: true },
        { name: "Advanced Competitor Tracking", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Unlimited Product Imports", included: true },
      ],
      buttonText: "Start Enterprise Plan",
      popular: false,
    }
  ];
  
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Select the perfect plan for your dropshipping business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl border ${plan.popular 
                ? 'border-weenify-purple shadow-lg shadow-weenify-purple/20 scale-105' 
                : 'border-gray-200'} bg-white p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl relative`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-weenify-purple text-white text-xs py-1 px-3 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full rounded-full ${plan.popular 
                  ? 'bg-gradient' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
