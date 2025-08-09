"use client";
import { useState } from "react";
import CardForm from "../ResultPage/CardForm";
import { AnimatePresence, motion } from "framer-motion";

export default function GivePlan() {
  const [flag, setFlag] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeIn" }}
      className="flex w-1/1  justify-center ">
      {
        <button
          onClick={() => setFlag(true)}
          className={` 
         fixed top-[90%]  w-[456px]
       bg-[#16B693] h-[57px] text-[18px] cursor-pointer rounded-[1rem] flex items-center justify-center font-bold max-lg:w-[300px]`}>
          ПОЛУЧИТЬ МОЙ ПЛАН
          <AnimatePresence>
            {" "}
            {flag && <CardForm setFlag={setFlag} />}
          </AnimatePresence>
        </button>
      }
    </motion.section>
  );
}
