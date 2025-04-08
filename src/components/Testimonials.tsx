
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      content: "Weenify has transformed my dropshipping business. Found 3 winning products in my first week that are still selling strong months later.",
      author: "Alex Johnson",
      role: "eCommerce Entrepreneur",
      avatar: "AJ"
    },
    {
      id: 2,
      content: "The Product Spy feature is a game-changer. I was able to see exactly what was selling on my competitor's store and adapt my strategy.",
      author: "Sarah Miller",
      role: "Shopify Store Owner",
      avatar: "SM"
    },
    {
      id: 3,
      content: "I've tried multiple research tools but Weenify is hands down the best. The 1-click import feature alone saves me hours every week.",
      author: "David Chen",
      role: "Digital Marketer",
      avatar: "DC"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Loved by <span className="text-gradient">Thousands</span> of Dropshippers
          </h2>
          <p className="text-gray-600 text-lg">
            Hear what our users have to say about finding winning products with Weenify
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex space-x-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-weenify-purple text-weenify-purple" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-weenify-purple to-weenify-blue text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-gray-100 p-5 rounded-xl flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-2xl">
            <div className="rounded-full p-3 bg-white shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="flex space-x-0.5 justify-center md:justify-start mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-medium">4.9/5 stars on Chrome Web Store</p>
              <p className="text-gray-500 text-sm">Based on 350+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
