
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Database, ShoppingCart, BarChart } from 'lucide-react';

const DetailedFeatures: React.FC = () => {
  const features = [
    {
      title: "Real-Time Market Analysis",
      description: "Track trending products across multiple marketplaces in real-time. Our algorithm analyzes thousands of products daily to identify those with the highest profit potential based on sales velocity, competition, and markup opportunities.",
      icon: <Search className="h-10 w-10 text-weenify-purple" />,
      image: "https://i.imgur.com/FpzITFg.png",
      alt: "Real-Time Market Analysis Dashboard"
    },
    {
      title: "Extensive Product Research Database",
      description: "Access our database of over 1 million products with detailed performance metrics. Each product comes with comprehensive analytics including sales history, profit margins, supplier information, and audience demographics to help you make informed decisions.",
      icon: <Database className="h-10 w-10 text-weenify-blue" />,
      image: "https://i.imgur.com/DGkyCYo.png",
      alt: "Product Research Database Interface"
    },
    {
      title: "1-Click Import to Shopify",
      description: "Save hours of work with our seamless import system. Select any winning product and import it directly to your Shopify store with complete product details, optimized descriptions, high-quality images, and pricing suggestions - all with a single click.",
      icon: <ShoppingCart className="h-10 w-10 text-weenify-purple" />,
      image: "https://i.imgur.com/H7CdmIg.png",
      alt: "One-Click Shopify Import Feature"
    },
    {
      title: "Product Spy (Competitor Tracker)",
      description: "Gain valuable insights into your competitors' strategies by entering any Shopify store URL. Our Product Spy tool reveals their best-selling products, pricing strategies, estimated sales volumes, and marketing approaches to help you stay ahead.",
      icon: <BarChart className="h-10 w-10 text-weenify-blue" />,
      image: "https://i.imgur.com/Wk4atWg.png",
      alt: "Competitor Analysis Dashboard"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Powerful <span className="text-gradient">Features</span> For Dropshippers
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how Weenify transforms your product research and sourcing workflow
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
              <div className="lg:w-1/2">
                <Card className="overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="bg-gray-800 text-white p-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-mono bg-gray-700 rounded px-2 py-0.5 flex-grow text-center">
                        app.weenify.com/{feature.title.toLowerCase().replace(/\s+/g, '-')}
                      </div>
                    </div>
                    <img 
                      src={feature.image} 
                      alt={feature.alt}
                      className="w-full aspect-video object-cover object-top"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-gray-100 mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
