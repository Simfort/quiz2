"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/Kegel Power v5.png";
import { useParams, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function HeaderProgress() {
  const task = useParams()["task"];
  const ref = useRef<HTMLDivElement>(null);
  const { progress } = useSelector(
    (state: { task: { progress: number } }) => state.task
  );
  const searchParams = useSearchParams().toString();
  useEffect(() => {
    ref.current!.style.width = `${progress}%`;
  }, [progress]);
  return (
    <header className="bg-[rgb(9,10,36)] h-[46px] gap-4  p-5 flex items-center flex-col  max-lg:w-[300px] w-[476px]">
      <div className="flex bg-[rgb(9,10,36)] justify-between items-center  w-[476px] max-lg:w-[300px] h-[35px]  z-[1000]">
        <Link
          href={
            Number(task) == 0
              ? "/en"
              : `/en/task/${Number(task) - 1}?${searchParams}`
          }>
          <ArrowLeft size={24} />
        </Link>
        <div className="font-bold flex items-center gap-2">
          <Image alt="logo" src={logo} width={36} />
          <p className="text-[13px] font-[500]">Kegel Men</p>
        </div>
        <p>
          <span className="text-[18px] font-bold relative bottom-1 ">
            {Number(task) + 1}
          </span>
          <span className="text-[16px]">/17</span>
        </p>
      </div>
      <div className="w-1/1 relative   flex ">
        <div className=" bg-[rgba(209,38,43,0.52)] rounded-full w-1/1 h-[5px]"></div>
        <div
          ref={ref}
          className=" bg-[#d1252b] rounded-full z-[1000] absolute h-[5px]"></div>
      </div>
    </header>
  );
}
