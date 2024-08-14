import React from "react";

const About = () => {
  return (
    <section className="min-h-screen py-12 bg-white">
      <div className="relative py-8 bg-white">
        <div className="absolute right-0 top-0 mt-2 ">
          <div className="bg-blue-500 text-white font-bold text-2xl px-6 py-2 rounded-ss-3xl">
            ABOUT US
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <p className="text-gray-700 leading-9 mb-6">
              NovoPay envisions a world where financial transactions are
              effortless, secure, and accessible to everyone. NovoPay is a
              strategic extension of the expertise and leadership established by
              its sister companies, NovoTel, NovoCom, and Intercloud Limited,
              which are recognised and well-established leaders in the IT and
              telecommunications industry. We aim to be the leading innovator in
              payment gateway systems and automation services, empowering
              businesses and individuals to succeed in the digital economy. 
            </p>
            <p className="text-gray-700 leading-9 mb-6">
              At NovoPay, we are committed to shaping the future of financial
              technology by providing cutting-edge payment gateway systems and
              automation services. Our mission is to revolutionize the fintech
              landscape by delivering comprehensive fintech solutions that
              enhance financial efficiency, transparency, and inclusivity.
              Through relentless innovation and a commitment to excellence, we
              strive to simplify financial processes, enhance digital payment
              experiences, and empower businesses to thrive in the digital age.
            </p>
            <p className="text-gray-700 leading-9">
              With a comprehensive suite of fintech services, we aim to be the
              foremost partner for businesses seeking reliable, secured, and
              scalable financial solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
