
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, DollarSign, Users, Link, BarChart3, Calendar, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Affiliate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1.5 px-3 text-sm font-medium">
                Weenify Affiliate Program
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Earn <span className="text-gradient">30% Recurring Commissions</span> For Life
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the Weenify affiliate program and earn generous commissions by recommending
                the ultimate dropshipping product research tool to your audience.
              </p>
              <Button size="lg" className="bg-gradient rounded-full shadow-lg shadow-weenify-purple/20 hover:shadow-weenify-purple/40 text-base">
                Join Affiliate Program <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Commission Details */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1 px-3 text-sm">
                  Lifetime Value
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Get <span className="text-gradient">30% Recurring</span> Commissions On Every Sale
                </h2>
                <p className="text-gray-600 mb-6">
                  Unlike one-time commission programs, with Weenify you'll earn 30% of what your referrals pay, every month they remain a customer. That means your earnings compound over time as you refer more users.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-weenify-purple shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Lifetime Commissions</p>
                      <p className="text-gray-600">Earn passive income as long as your referrals remain customers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-weenify-purple shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">30% of All Plans</p>
                      <p className="text-gray-600">Earn from every subscription plan, including annual subscriptions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-weenify-purple shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Monthly Payouts</p>
                      <p className="text-gray-600">Get paid reliably every month via PayPal, Stripe, or bank transfer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl relative">
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white font-bold text-xl p-4 rounded-2xl shadow-lg">
                  30%
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Commission Calculator</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 mb-2">If you refer 10 customers on the Pro plan ($49/mo):</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                        <p>Monthly: <span className="font-bold text-weenify-purple">$147</span></p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                        <p>Yearly: <span className="font-bold text-weenify-purple">$1,764</span></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">If you refer 50 customers on the Pro plan:</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                        <p>Monthly: <span className="font-bold text-weenify-purple">$735</span></p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                        <p>Yearly: <span className="font-bold text-weenify-purple">$8,820</span></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">If you refer 100 customers on the Pro plan:</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                        <p>Monthly: <span className="font-bold text-weenify-purple">$1,470</span></p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                        <p>Yearly: <span className="font-bold text-weenify-purple">$17,640</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-weenify-purple/10 text-weenify-purple mb-4 py-1 px-3 text-sm">
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How The <span className="text-gradient">Affiliate Program</span> Works
              </h2>
              <p className="text-gray-600 text-lg">
                Getting started is easy. Follow these simple steps to begin earning commissions with Weenify.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-gray-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white w-8 h-8 flex items-center justify-center rounded-bl-lg font-bold">
                  1
                </div>
                <CardContent className="p-6 pt-10">
                  <div className="w-16 h-16 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-weenify-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sign Up</h3>
                  <p className="text-gray-600">
                    Register for the Weenify affiliate program. Approval is typically granted within 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white w-8 h-8 flex items-center justify-center rounded-bl-lg font-bold">
                  2
                </div>
                <CardContent className="p-6 pt-10">
                  <div className="w-16 h-16 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
                    <Link className="h-8 w-8 text-weenify-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Share Your Link</h3>
                  <p className="text-gray-600">
                    Promote Weenify using your unique affiliate link via email, social media, or your blog.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-br from-weenify-purple to-weenify-blue text-white w-8 h-8 flex items-center justify-center rounded-bl-lg font-bold">
                  3
                </div>
                <CardContent className="p-6 pt-10">
                  <div className="w-16 h-16 bg-weenify-purple/10 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-weenify-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Earn Commissions</h3>
                  <p className="text-gray-600">
                    Get paid 30% of every payment your referrals make, for as long as they remain customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Promote Weenify */}
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

        {/* Affiliate Dashboard CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-weenify-purple/5 to-weenify-blue/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Ready To Start <span className="text-gradient">Earning?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join our affiliate program today and start earning 30% recurring commissions on every sale you refer. Access your affiliate dashboard to track your earnings in real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient rounded-full shadow-lg shadow-weenify-purple/20 hover:shadow-weenify-purple/40 text-base">
                    Join Affiliate Program
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-weenify-purple/30 text-base">
                    Access Affiliate Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
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

        {/* Trust Badges */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Affiliate;
