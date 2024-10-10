"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
  const variants = {
    hover: {
      scale: [1, 1.08, 1],
      rotate: [0, -10, 10, 0], // Adjust the angles as per your preference
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeOut", // Optional: Add an easing function for smoother animation
      },
    },
  };

  return (
    <section className="bottom-0 left-0 w-full flex">
      <div className="w-full px-8 py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex mt-2 space-x-6 md:w-2/3 w-full justify-start mx-auto">
          <div className="text-white justify-start flex self-start align-start">
            <div className="flex flex-row"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:w-2/3">
            <div className="flex flex-row justify-between mx-4">
              <div className="space-x-4 flex flex-row self-center mt-4">
                <div className="bg-gray-100 border dark:shadow-none border-gray-400 rounded-full h-8 w-8 flex justify-center items-center shadow-custom drop-shadow-lg">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/marlon-stevenson-510738109/"
                    className="text-gray-700"
                  >
                    <span className="sr-only">Linkedin</span>
                    <motion.svg
                      variants={variants}
                      whileHover="hover"
                      className="w-7 h-7"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 48 48"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M24,4c-2.68218,0 -5.2485,0.5299 -7.58984,1.49023c-0.5046,0.19739 -0.86353,0.65155 -0.93901,1.1881c-0.07547,0.53655 0.14425,1.0721 0.57481,1.40104c0.43056,0.32894 1.00504,0.40013 1.50287,0.18626c1.98865,-0.81567 4.16335,-1.26562 6.45117,-1.26562c9.40629,0 17,7.59371 17,17c0,4.84912 -2.02013,9.20515 -5.26758,12.30273c-0.4054,0.36568 -0.58013,0.92274 -0.4562,1.45445c0.12393,0.53171 0.52694,0.95412 1.05225,1.10287c0.52531,0.14876 1.08996,0.00038 1.47427,-0.3874c3.81655,-3.64041 6.19727,-8.78777 6.19727,-14.47266c0,-11.02771 -8.97229,-20 -20,-20zM10.14648,10.25195c-0.44184,-0.00345 -0.86273,0.18806 -1.15039,0.52344c-3.10796,3.52293 -4.99609,8.16254 -4.99609,13.22461c0,11.02771 8.97229,20 20,20c2.34235,0 4.59494,-0.40463 6.6875,-1.14648c0.50525,-0.17894 0.87665,-0.61385 0.97427,-1.14089c0.09762,-0.52704 -0.09337,-1.06612 -0.50101,-1.41415c-0.40764,-0.34803 -0.97,-0.45213 -1.47521,-0.27308c-1.77745,0.63014 -3.6879,0.97461 -5.68555,0.97461c-9.40629,0 -17,-7.59371 -17,-17c0,-4.31793 1.60205,-8.24316 4.24609,-11.24023c0.39722,-0.43805 0.50004,-1.06857 0.26259,-1.61012c-0.23746,-0.54155 -0.77089,-0.89309 -1.3622,-0.89769zM15.5,13c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM14,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-13c0,-0.553 -0.447,-1 -1,-1zM21,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-7.5c0,-1.379 1.121,-2.5 2.5,-2.5c1.379,0 2.5,1.121 2.5,2.5v7.5c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-8c0,-3.309 -2.691,-6 -6,-6c-1.538,0 -2.937,0.58602 -4,1.54102v-0.54102c0,-0.553 -0.447,-1 -1,-1z"
                      ></path>
                    </motion.svg>
                  </Link>
                </div>
                <div className="bg-gray-100 border dark:shadow-none border-gray-400 rounded-full h-8 w-8 flex justify-center items-center shadow-custom drop-shadow-lg">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/phoeniqu/"
                    className="text-gray-700"
                  >
                    <span className="sr-only">Instagram</span>
                    <motion.svg
                      variants={variants}
                      whileHover="hover"
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </motion.svg>
                  </Link>
                </div>
                <div className="bg-gray-100 border dark:shadow-none border-gray-400 rounded-full h-8 w-8 flex justify-center items-center shadow-custom drop-shadow-lg">
                  <Link
                    target="_blank"
                    href="https://twitter.com/mRockSwe"
                    className="text-gray-700"
                  >
                    <span className="sr-only">Twitter</span>
                    <motion.svg
                      variants={variants}
                      whileHover="hover"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fillRule="evenodd"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </motion.svg>
                  </Link>
                </div>
                <div className="bg-gray-100 border border-gray-400 rounded-full h-8 w-8 flex justify-center items-center shadow-custom dark:shadow-none drop-shadow-lg">
                  <Link
                    target="_blank"
                    href="https://github.com/marlybone"
                    className="text-gray-700"
                  >
                    <span className="sr-only">GitHub</span>
                    <motion.svg
                      variants={variants}
                      whileHover="hover"
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </motion.svg>
                  </Link>
                </div>
              </div>
              <p className="ml-6 mt-4 leading-5 md:font-[400] text-xs md:text-lg font-[Inter] text-black dark:text-white">
                © 2024 Marlon, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
