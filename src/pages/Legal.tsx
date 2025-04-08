
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h1 className="text-3xl font-display font-bold mb-6">Terms and Conditions</h1>
            
            <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Weenify ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the Weenify website, products, and services.
                By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              
              <h2>2. Using Our Services</h2>
              <p>
                You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
              </p>
              
              <h2>3. Your Weenify Account</h2>
              <p>
                You may need a Weenify Account in order to use some of our Services. You are responsible for maintaining the security of your account and password. Weenify cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
              </p>
              
              <h2>4. Privacy and Copyright Protection</h2>
              <p>
                Weenify's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Weenify can use such data in accordance with our privacy policies.
              </p>
              
              <h2>5. Your Content in Our Services</h2>
              <p>
                Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. When you upload, submit, store, send or receive content to or through our Services, you give Weenify a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content.
              </p>
              
              <h2>6. Subscription and Payments</h2>
              <p>
                Some of our services require payment. You agree to pay all fees and charges associated with your account on a timely basis and according to the fees schedule and terms displayed to you at the time of purchase. You agree to maintain accurate and current billing and contact information.
              </p>
              
              <h2>7. Modifications to the Service</h2>
              <p>
                Weenify reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Weenify shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
              </p>
              
              <h2>8. Termination</h2>
              <p>
                Weenify, in its sole discretion, may terminate your account or access to the Service, for any reason, including without limitation if Weenify believes that you have violated or acted inconsistently with the letter or spirit of these Terms of Service. Upon termination for any reason, you continue to be bound by these Terms of Service.
              </p>
              
              <h2>9. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WEENIFY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
              </p>
              
              <p className="text-sm text-gray-500 mt-8">Last updated: April 8, 2025</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h1 className="text-3xl font-display font-bold mb-6">Privacy Policy</h1>
            
            <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information to provide better services to our users. We collect information in the following ways:
              </p>
              <ul>
                <li>Information you provide to us: When you sign up for a Weenify account, we ask for personal information.</li>
                <li>Information we get from your use of our services: We collect information about the services that you use and how you use them.</li>
              </ul>
              
              <h2>2. How We Use Information</h2>
              <p>
                We use the information we collect to provide, maintain, protect and improve our services, to develop new ones, and to protect Weenify and our users. We also use this information to offer you tailored content.
              </p>
              
              <h2>3. Information Sharing</h2>
              <p>
                We do not share personal information with companies, organizations and individuals outside of Weenify unless one of the following circumstances applies:
              </p>
              <ul>
                <li>With your consent</li>
                <li>For legal reasons</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We work hard to protect Weenify and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.
              </p>
              
              <h2>5. Accessing and Updating Your Personal Information</h2>
              <p>
                Whenever you use our services, we aim to provide you with access to your personal information. If that information is wrong, we strive to give you ways to update it quickly or to delete it – unless we have to keep that information for legitimate business or legal purposes.
              </p>
              
              <h2>6. Changes to this Policy</h2>
              <p>
                Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.
              </p>
              
              <p className="text-sm text-gray-500 mt-8">Last updated: April 8, 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
