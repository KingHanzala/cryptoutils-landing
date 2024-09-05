import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section id="contact-us">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-md mx-auto text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="max-w-sm w-full text-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900 mx-auto">
              <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <a href="mailto:cryptoutils@gmail.com" className="inline-flex items-center text-blue-600 hover:underline">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Email Us</h3>
              </a>
          </div>
          <div className="max-w-sm w-full text-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900 mx-auto">
              <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
            </div>
            <a href="https://t.me/cryptoutils" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Join Our Telegram Group</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
