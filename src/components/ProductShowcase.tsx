
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Dog Training Collar",
      image: "/lovable-uploads/0ad04c38-b6d5-4102-a605-1b2ea2a4178d.png",
      sales: "5,200+ units",
      profit: "$17.50 avg profit"
    },
    {
      id: 2,
      name: "Mini Portable Projector",
      image: "/lovable-uploads/c6b4aba0-6c3f-426a-8ac2-744d8a701915.png",
      sales: "3,800+ units",
      profit: "$24.75 avg profit"
    },
    {
      id: 3,
      name: "Pet Cleaning Shower",
      image: "/lovable-uploads/3e91cf1a-77d3-417b-a764-79a3cf8320ed.png",
      sales: "7,400+ units",
      profit: "$15.90 avg profit"
    },
    {
      id: 4,
      name: "Ab Wheel Roller",
      image: "/lovable-uploads/4566c707-e000-4110-9e0d-27d1ecef4545.png",
      sales: "4,100+ units",
      profit: "$12.25 avg profit"
    },
  ];

  return (
    <section id="winners" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-weenify-purple/30 text-weenify-purple font-medium px-3 py-1">
            Real Data
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover <span className="text-gradient">Winning Products</span> In Minutes
          </h2>
          <p className="text-gray-600 text-lg">
            Here are some recent top-performing products our users found with Weenify
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="p-3 bg-gray-50 aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {product.sales}
                  </span>
                  <span className="text-sm text-purple-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-weenify-purple"></span>
                    {product.profit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
