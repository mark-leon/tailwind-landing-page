import React from "react";

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="relative py-8 bg-white">
        <div className="absolute right-0 top-0 mt-2 mr-4">
          <div className="bg-blue-500 text-white font-bold text-2xl px-6 py-2 rounded-ss-3xl">
            ABOUT US
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h3 className="text-gray-700  mb-4">
              <b>Novopay</b> is a concern of Intercloud limited, Novotel Limited
              and Novocom Limited.
            </h3>
            <p className="text-gray-700 leading-9">
              Intercloud Limited, operating under the brand name Brilliant, is a
              prominent Telecommunication and IT company in Bangladesh. It
              offers a comprehensive suite of IT Enabled services. Intercloud
              Limited empowers businesses with reliable Cloud Service, Telephony
              solutions, feature-rich PBX systems, SMS marketing solutions and
              high-speed Internet & Data connections. With 15+ years of
              technological and management experience, the group is committed to
              delivering robust local and international services for carriers
              and enterprises, leverages the expertise of a team with an
              established global telecom network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
