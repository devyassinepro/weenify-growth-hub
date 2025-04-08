
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Weenify?",
      answer: "Weenify is a Chrome extension for dropshippers that helps you find winning products through real-time market analysis, conduct product research using our extensive database, import items to Shopify with one click, and track competitors' sales with our Product Spy tool."
    },
    {
      question: "How do I install the Weenify Chrome extension?",
      answer: "Simply click the 'Install Chrome Extension' button on our website, and you'll be redirected to the Chrome Web Store. From there, click 'Add to Chrome' and you're all set!"
    },
    {
      question: "Is Weenify compatible with my Shopify store?",
      answer: "Yes! Weenify is fully compatible with all Shopify stores. Our 1-click import feature works seamlessly with Shopify's platform to add products directly to your store inventory."
    },
    {
      question: "How accurate is the competitor analysis feature?",
      answer: "Our Product Spy tool provides highly accurate data on competitors' top-selling products. It analyzes store traffic patterns, inventory changes, and other signals to determine which products are performing well."
    },
    {
      question: "Does Weenify offer a free trial?",
      answer: "Yes, we offer a 7-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "Can I use Weenify with platforms other than Shopify?",
      answer: "Currently, our 1-click import feature is optimized for Shopify. However, you can still use our product research and competitor analysis tools regardless of which e-commerce platform you use."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about Weenify and how it works
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg py-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
