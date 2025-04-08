
import React from 'react';
import { Search, Database, ShoppingCart, BarChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-weenify-purple" />,
      title: "Real-Time Market Analysis",
      description: "Track trending products across multiple marketplaces in real-time. Get insights on what's selling now."
    },
    {
      icon: <Database className="h-8 w-8 text-weenify-blue" />,
      title: "Product Research Database",
      description: "Access our database of 1M+ products with detailed performance metrics and profitability analysis."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-weenify-purple" />,
      title: "1-Click Import to Shopify",
      description: "Import products directly to your Shopify store with a single click. Save hours on manual setup."
    },
    {
      icon: <BarChart className="h-8 w-8 text-weenify-blue" />,
      title: "Product Spy",
      description: "Analyze any Shopify store to see their best-selling products, pricing strategies, and more."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything You Need to <span className="text-gradient">Find Winning Products</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Weenify gives you the tools to discover profitable products and stay ahead of your competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-5 inline-flex p-3 rounded-lg bg-gray-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
