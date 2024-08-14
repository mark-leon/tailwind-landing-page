import React from "react";

const MissionVision = () => {
  return (
    <section className="min-h-screen py-12 bg-white">
      <div className="relative py-8 bg-white">
        <div className="absolute right-0 top-0 mt-2 ">
          <div className="bg-blue-500 text-white font-bold text-2xl px-6 py-2 rounded-ss-3xl">
            MISSION AND VISION
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Mission & Vision:
            </h3>
            <p className="text-gray-700">
              NovoPay is committed to redefining the future of financial
              transactions with solutions designed for the digital age.
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="text-blue-600 font-bold mb-4">Mission:</span> Our
              mission is to revolutionize the payment landscape by delivering
              innovative, secure, and user-friendly payment gateway systems and
              automation services. We strive to enhance financial efficiency,
              transparency, and inclusivity, empowering our clients to succeed
              in a fast moving world.
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="text-blue-600 font-bold mb-4">Vision:</span>
              NovoPay is a forward-thinking payment gateway company dedicated to
              transforming the way financial transactions are conducted. Our
              vision is to create a future where every business, regardless of
              size, can thrive in the digital economy through secure,
              accessible, and cutting-edge payment solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
