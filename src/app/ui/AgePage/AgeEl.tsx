"use client";
import { setTask } from "@/app/store/actions/task";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function AgeEl({
  text,
  image,
}: {
  text: string;
  image: StaticImageData;
}) {
  const dispatch = useDispatch();
  return (
    <Link
      onClick={() => dispatch(setTask({ task: "age", value: text }))}
      href={`/social-prof?age=${text}`}
      className="min-h-[175px] relative flex flex-col  w-[145px]">
      <div className="relative min-h-[175px] flex  flex-col items-center justify-end ">
        <div className="w-1/1 h-[125px]  z-[-1] top-[3  0%] bottom-0 left-0 right-0 rounded-tl-[1rem]  rounded-tr-[1rem] absolute bg-[#191924] "></div>
        <Image
          width={200}
          src={image}
          alt="age person"
          className="h-1/1 w-[125px] ml-[10px] absolute z-2 top-0 bottom-0 left-0 right-0 "
        />
      </div>
      <div className="h-1/1 p-[12px] w-1/1 mt-auto  rounded-br-[1rem] z-1 rounded-bl-[1rem] bg-[#000212] flex items-center justify-center font-bold">
        {text}
      </div>
    </Link>
  );
}
