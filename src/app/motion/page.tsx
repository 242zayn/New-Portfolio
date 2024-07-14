"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[url`/image2.png`] ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" w-[100px] h-[100px] rounded-md bg-white "
      ></motion.div>
    </div>
  );
};

export default page;
