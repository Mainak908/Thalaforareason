"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [value, setValue] = useState<string>("");
  const [show, setShow] = useState(false);
  const [init, setinit] = useState(false);
  const [digitArray, setdigitArray] = useState<number[]>([]);
  const [strArray, setstrArray] = useState<string[]>([""]);

  const handleSubmit = () => {
    proveThala(value) ? setShow(true) : setShow(false);
    setinit(true);
    setValue("");
  };
  //   console.log("render");

  const numC = (val: number): boolean => {
    const numStr = Math.abs(val).toString();
    const darray = Array.from(numStr, Number);
    setdigitArray(darray);
    setstrArray([]);
    const result = darray.reduce((acc, digit) => acc + digit, 0);
    return result === 7;
  };

  const proveThala = (val: string): boolean => {
    let number = parseInt(val, 10);
    const digitCount = Math.abs(number).toString().length;

    if (digitCount === val.length) {
      return numC(number);
    } else {
      if (val.length === 7) {
        setstrArray([...value]);
        setdigitArray([]);
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-8 rounded-md shadow-md mb-8"
      >
        <input
          type="text"
          placeholder="Enter a text or number"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-7"
      >
        {show && init ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex">
              {(!digitArray.length ? strArray : digitArray).map((val, key) => (
                <div key={key} className=" flex flex-row gap-1">
                  <h1>{val}</h1>
                  {key <
                    (!digitArray.length ? strArray : digitArray).length - 1 && (
                    <h2>+</h2>
                  )}
                </div>
              ))}
              <h1>=7 </h1>
            </div>
            <div>
              <Image
                src="/funny.jpg"
                className="size-28 h-28 rounded-md"
                width={112}
                alt=""
                height={112}
              />
              <h1>thala for a reason</h1>
            </div>
          </motion.div>
        ) : (
          init && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-black"
            >
              No Thala for a reason
            </motion.h1>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Page;
