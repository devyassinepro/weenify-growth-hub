
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Calendar, Users, Chrome } from 'lucide-react';

const WhyPromote: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1 px-3 text-sm">
            Perfect Opportunity
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why <span className="text-gradient">Promote Weenify</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Weenify offers an exceptional affiliate opportunity with a product that truly delivers value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-card">
            <div className="w-12 h-12 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-weenify-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">In-Demand SaaS</h3>
            <p className="text-gray-600">
              Dropshipping remains a popular business model, and store owners are actively seeking tools like Weenify to gain a competitive edge.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-weenify-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">Great Retention</h3>
            <p className="text-gray-600">
              Weenify's high retention rate means your referred users stay longer, providing you with recurring commissions month after month.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-weenify-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">Broad Appeal</h3>
            <p className="text-gray-600">
              Whether your audience consists of beginners or experienced dropshippers, Weenify offers valuable features for all skill levels.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
              <Chrome className="h-6 w-6 text-weenify-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">Chrome Extension</h3>
            <p className="text-gray-600">
              The Chrome extension provides an easy entry point for users to experience the value of Weenify firsthand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPromote;
