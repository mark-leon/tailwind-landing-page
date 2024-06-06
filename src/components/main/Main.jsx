import React from "react";

const Main = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-500">EASY PAYMENT</h1>
            <h2 className="text-5xl font-bold text-blue-700">
              ANYWHERE, ANYTIME
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">
              JOIN NOW
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://s3.brilliant.com.bd/brilliant_drive_desktop/nothing_here.png"
              alt="Phone"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-blue-500 px-20">
        <p className="text-8xl text-center">FOOTER AREA</p>
      </div> */}
    </>
  );
};

export default Main;
