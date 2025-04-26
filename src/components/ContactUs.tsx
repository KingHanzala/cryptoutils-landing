import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-screen-md mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Contact Us</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8 max-w-2xl mx-auto">
          <div className="flex-1 bg-white/70 dark:bg-gray-700/70 rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Email Us</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">Send us your questions or feedback.</p>
            <a href="mailto:cryptoutils@gmail.com" className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
              cryptoutils@gmail.com
            </a>
          </div>
          <div className="flex-1 bg-white/70 dark:bg-gray-700/70 rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Join Telegram</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">Connect with the community and team.</p>
            <a href="https://t.me/cryptoutils" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition duration-300 ease-in-out">
              Join Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
