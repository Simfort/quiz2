"use client";
import { useEffect, useState } from "react";

export default function HeaderResult() {
  const [timer, setTimer] = useState({ min: 5, sec: 59 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev.min == 0 && prev.sec == 0) {
          clearInterval(interval);
          return { min: 0, sec: 0 };
        } else if (prev.sec == 0) {
          return { min: prev.min - 1, sec: 59 };
        } else {
          return { ...prev, sec: prev.sec - 1 };
        }
      });
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  return (
    <header className="bg-[#000212] z-10 flex w-1/1 fixed top-0 bottom-0 right-0 left-0 gap-10 max-lg:flex-col justify-center items-center h-[100px] max-lg:h-[150px] max-lg:flex-wrap max-lg:gap-5">
      <h2 className="font-bold text-[28px]">
        There`s still time for a discount:
      </h2>
      <div>
        <div className="text-[#26d1a3] max-lg:text-[25px] text-[32px] font-bold flex gap-2">
          <span>0{timer.min}</span>
          <span>:</span>
          <span>
            {timer.sec < 10 && "0"}
            {timer.sec}
          </span>
        </div>
        <div className="flex justify-between pl-[5px] pr-[5px]">
          <span>min</span>
          <span>sec</span>
        </div>
      </div>
    </header>
  );
}
