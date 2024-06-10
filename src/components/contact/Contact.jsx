import React from "react";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="min-h-screen py-12 bg-white">
      <div className="relative py-8 bg-white">
        <div className="absolute right-0 top-0 mt-2 mr-4">
          <div className="bg-blue-500 text-white font-bold text-2xl px-6 py-2 rounded-ss-3xl">
            CONTACT US
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 ">
        <div className="space-y-12">
          <div className="text-blue-700 text-center text-4xl font-bold">
            GET IN TOUCH
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-blue-500 text-xl font-bold">
              <IoMdMail />
              <span>info@novopay.com.bd</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
