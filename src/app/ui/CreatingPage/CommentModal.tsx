"use client";
import star from "../../../../public/svg/star.svg";
import { X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function CommentModal({
  text,
  image,
  author,
  title,
  setFlag,
}: {
  text: string;
  image: string;
  author: string;
  title: string;
  setFlag: (arg: boolean) => void;
}) {
  return createPortal(
    <div className="fixed rounded-[0.5rem] top-0 bottom-0 right-0 left-0 flex items-center justify-center flex-col gap-2  bg-[rgba(0,0,0,0.7)]">
      <div className="w-[340px]  max-lg:w-[300px] flex justify-end ml-[40px]">
        <button
          onClick={() => setFlag(false)}
          className="rounded-full p-2 cursor-pointer bg-[#E3E5E9]">
          <X className="text-black" size={26} />
        </button>
      </div>
      <div className="bg-[#232537] p-[1rem] gap-5 flex flex-col rounded-[0.5rem]  justify-between w-[340px] min-h-[216px] max-lg:w-[300px]">
        <div className="flex flex-col gap-3">
          <h3 className="text-[0.9rem] font-bold">{title}</h3>
          <ol className="flex gap-2">
            {new Array(5).fill(null).map((val, i) => (
              <Image width={20} key={i} src={star} alt="star" />
            ))}
          </ol>
          <p className="text-[0.8rem]">{text}</p>
        </div>
        <div className="flex w-1/1 justify-between">
          <div className="flex gap-2">
            <img
              src={image}
              alt="author"
              className="w-[32px] h-[32px] rounded-full"
            />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
