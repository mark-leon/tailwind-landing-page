import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen py-12 bg-white">
      <div className="relative py-8 bg-white">
        <div className="absolute right-0 top-0 mt-2 ">
          <div className="bg-blue-500 text-white font-bold text-2xl px-6 py-2 rounded-ss-3xl">
            CONTACT US
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="space-y-12">
          <div className="text-blue-700 text-center text-4xl font-bold">
            GET IN TOUCH
          </div>
          <div className="space-y-8">
            <div className="flex space-x-2 cursor-pointer">
              <span className="text-xl font-bold text-blue-600">Website:</span>
              <span className="text-gray-700">
                <a target="_self" href="https://www.novopay.com.bd">
                  www.novopay.com.bd
                </a>
              </span>
            </div>
            <div className="flex space-x-2 cursor-pointer">
              <span className="text-xl font-bold text-blue-600">Email:</span>
              <span className="text-gray-700">
                <a href="mailto:sales@brilliant.com.bd">info@novopay.com.bd</a>
              </span>
            </div>
            <div className="flex space-x-2 cursor-pointer">
              <span className="text-xl font-bold text-blue-600">
                Phone number:
              </span>
              <span className="text-gray-700">
                <a href="tel:+8809638383838">
                  +880 9638 381111, +88 02 8899657-9
                </a>
              </span>
            </div>
            <div className="flex space-x-2 cursor-pointer">
              <span className="text-xl font-bold text-blue-600">
                Corporate Office:
              </span>
              <span className="text-gray-700">
                GA-30/G Pragati Sarani, Shahjadpur, Gulshan 2, Dhaka-1212,
                Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
