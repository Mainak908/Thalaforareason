"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../public/funny.jpg";

const page = () => {
  const [value, setvalue] = useState<string>("");
  const [show, setshow] = useState(false);
  function handleSubmit(value: string) {
    prove_thala(value) ? setshow(true) : setshow(false);
  }
  const num_c = (val: number): boolean => {
    // console.log(val);
    const numStr = Math.abs(val).toString();

    // Use Array.from to create an array of characters and then map each character to its numeric value
    const digitArray = Array.from(numStr, Number);

    // Use the reduce function to sum up the array of digits
    const result = digitArray.reduce((acc, digit) => acc + digit, 0);

    if (result === 7) return true;
    else return false;
  };
  const prove_thala = (val: string): boolean => {
    let number = parseInt(val, 10);
    // console.log(number);

    const digit_of_num = Math.abs(number).toString().length;
    // console.log(digit_of_num);
    if (digit_of_num === val.length) {
      if (num_c(number)) {
        return true;
      } else return false;
    } else {
      if (val.length === 7) {
        return true;
      } else return false;
    }
  };
  return (
    <div className=" ">
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Enter a text or number"
            onChange={(e) => setvalue(e.target.value)}
            value={value}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => handleSubmit(value)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-7">
        {show ? (
          <Image
            src="/funny.jpg"
            className=" size-28 h-28"
            width={112}
            alt=""
            height={112}
          />
        ) : (
          <h1 className="text-xl text-black">no Thala for a reason</h1>
        )}
      </div>
    </div>
  );
};

export default page;
