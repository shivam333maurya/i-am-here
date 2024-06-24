"use client";
import React from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <motion.div className="flex justify-center items-center w-full">
      <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-white text-center text-xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="emailOrPhone"
          >
            Email or Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
            id="emailOrPhone"
            type="text"
            placeholder="Email or Phone Number"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="***************"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
      </form>
    </motion.div>
  );
};

export { LoginPage };
