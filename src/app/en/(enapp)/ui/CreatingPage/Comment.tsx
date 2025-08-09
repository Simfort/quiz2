"use client";
import star from "../../../../../../public/svg/star.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CommentModal from "./CommentModal";

export default function Comment({
  preloadText,
  image,
  author,
  title,
  text,
}: {
  preloadText: string;
  image: string;
  author: string;
  title: string;
  text: string;
}) {
  const [flag, setFlag] = useState(false);

  return (
    <div className="bg-[#232537]  cursor-grab transition-[translateX] duration-100 rounded-[0.5rem] p-[1rem] flex flex-col justify-between w-[340px] h-[216px] max-lg:w-[300px]">
      <div className="flex flex-col gap-3">
        <h3 className="text-[0.9rem] font-bold">{title}</h3>
        <ol className="flex gap-2">
          {new Array(5).fill(null).map((val, i) => (
            <Image width={20} key={i} src={star} alt="star" />
          ))}
        </ol>
        <p className="text-[0.8rem]">{preloadText}</p>
      </div>
      <div className="flex w-1/1 justify-between">
        <div className="flex gap-2">
          <img
            className="w-[32px] h-[32px] rounded-full"
            src={image}
            alt="author"
          />
          <p>{author}</p>
        </div>
        <button
          onClick={() => setFlag(true)}
          className="text-[#007aff] font-bold text-[0.8rem]">
          More
        </button>
      </div>
      {flag && (
        <CommentModal
          setFlag={setFlag}
          author={author}
          text={text}
          image={image}
          title={title}
        />
      )}
    </div>
  );
}
