
import React from 'react';
import { CreditCard, Link, BarChart3 } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <h3 className="text-xl font-medium text-gray-600">Trusted By Affiliates Worldwide</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="font-medium">Reliable Payments</p>
                <p className="text-sm text-gray-500">Always on time</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Link className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Accurate Tracking</p>
                <p className="text-sm text-gray-500">Never lose a commission</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Real-time Stats</p>
                <p className="text-sm text-gray-500">Track your performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
