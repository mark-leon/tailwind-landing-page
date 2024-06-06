import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-gradient-login">
      <div className="bg-white  shadow-lg flex max-w-4xl">
        <div className="hidden md:block w-1/2">
          <img
            src="https://s3.brilliant.com.bd/brilliant_drive_desktop/Screenshot%20from%202024-06-06%2016-34-13.png"
            alt="illustration"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-20">
          <h2 className="text-[#3B82F6] font-bold font-sans mb-8 text-center text-2xl">
            Hello Again!
          </h2>
          <p className="mb-4 text-xs">
            Please provide Your Mail And Password To Login
          </p>

          <form>
            <div className="mb-4">
              <div className="flex-col mb-6">
                <div class="max-w-lg mx-auto">
                  <div class="max-w-sm mx-auto">
                    <div class="flex items-center">
                      <div class="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="Your mail"
                          required
                        />
                      </div>
                    </div>
                    <div class="flex items-center mt-4">
                      <div class="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="Your Password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-center justify-center">
              <button
                className={
                  "bg-[#3B82F6] hover:bg-secondary w-[280px] p-2 text-white shadow-sm cursor-pointer"
                }
                type="submit"
              >
                LOGIN
              </button>
            </div>
            <div className="items-center justify-center mt-4">
              <button
                className={
                  "bg-white hover:bg-secondary w-[280px] p-2 text-sm text-[#3B82F6] border-s border border-gray-300 shadow-sm cursor-pointer"
                }
                type="submit"
              >
                Sign In With Google
              </button>
            </div>

            <div className="mt-6 text-xs">
              <p className="text-center mb-2">
                Don't have Any Account?
                <span className="text-[#3B82F6]"> Please register</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
