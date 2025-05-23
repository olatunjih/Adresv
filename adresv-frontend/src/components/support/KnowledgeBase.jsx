import React, { useState } from 'react';

const KnowledgeBase = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track which FAQ is open

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on the 'Forgot Password?' link. Follow the instructions sent to your registered email address. If you don't receive an email, please check your spam folder or contact support."
    },
    {
      question: "What are the deposit fees?",
      answer: "Currently, Adresv does not charge any fees for cryptocurrency deposits. However, network fees from the respective blockchain (e.g., Ethereum network fees for ERC20 tokens) will still apply and are not controlled by Adresv."
    },
    {
      question: "How long do withdrawals take?",
      answer: "Withdrawal processing times vary depending on the cryptocurrency and network congestion. Typically, withdrawals are processed within 30 minutes to a few hours. You can track the status of your withdrawal in your transaction history."
    },
    {
      question: "How do I enable Two-Factor Authentication (2FA)?",
      answer: "You can enable 2FA in your account security settings. We recommend using Google Authenticator or a similar TOTP app. Scan the QR code provided, enter the 6-digit code from your app, and save your recovery codes in a safe place."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle or close if already open
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeBase;
