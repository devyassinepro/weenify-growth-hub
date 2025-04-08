
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Install the Chrome Extension",
      description: "Add Weenify to Chrome with one click and get instant access to all features."
    },
    {
      number: "02",
      title: "Research Winning Products",
      description: "Use our database and real-time analysis to find high-potential products."
    },
    {
      number: "03",
      title: "Analyze Competitors",
      description: "Enter any Shopify store URL to see what products are selling best."
    },
    {
      number: "04",
      title: "Import to Your Store",
      description: "Add products to your Shopify store with one click and start selling."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How Weenify <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get started in minutes and find your next winning product today
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-[calc(16.666%-1rem)] right-[calc(16.666%-1rem)] h-0.5 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-weenify-purple to-weenify-blue rounded-full flex items-center justify-center text-white font-bold mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20 bg-white rounded-full p-1">
                    <ArrowRight className="h-6 w-6 text-weenify-purple" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
