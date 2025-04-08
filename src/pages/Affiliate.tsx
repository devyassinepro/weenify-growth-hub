
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateHero from '@/components/affiliate/Hero';
import CommissionDetails from '@/components/affiliate/CommissionDetails';
import HowItWorks from '@/components/affiliate/HowItWorks';
import WhyPromote from '@/components/affiliate/WhyPromote';
import AffiliateCTA from '@/components/affiliate/AffiliateCTA';
import AffiliateFAQ from '@/components/affiliate/AffiliateFAQ';
import TrustBadges from '@/components/affiliate/TrustBadges';

const Affiliate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AffiliateHero />
        <CommissionDetails />
        <HowItWorks />
        <WhyPromote />
        <AffiliateCTA />
        <AffiliateFAQ />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  );
};

export default Affiliate;
