"use client";
import { useEffect, useRef, useState } from "react";

import { useSearchParams } from "next/navigation";
import Comment from "../CreatingPage/Comment";
import { alternateComments } from "@/app/lib/comment";
export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  let startX: number = 0;
  let startTransform: number = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    startX = e.touches[0].clientX;
    startTransform = parseFloat(
      getComputedStyle(ref.current!).transform!.split(",")[4] || "0"
    );
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.touches[0].clientX;
    const dx = currentX - startX;
    console.log(startTransform + dx);
    if (startTransform + dx < 700) {
      requestAnimationFrame(() => {
        ref.current!.style.transform = `translateX(${startTransform + dx}px)`;
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleDocumentMove = (e: TouchEvent) => {
      e.preventDefault();
      if (isDragging) {
        handleTouchMove(e as unknown as React.TouchEvent);
      }
    };

    const handleDocumentEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    document.addEventListener("touchmove", handleDocumentMove);
    document.addEventListener("touchend", handleDocumentEnd);

    return () => {
      document.removeEventListener("touchmove", handleDocumentMove);
      document.removeEventListener("touchend", handleDocumentEnd);
    };
  }, [isDragging]);
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-[20px] font-bold text-center ">
        {" "}
        Отзывы пользователей
      </h3>
      <ul className="flex gap-4 w-[500px] relative min-h-[220px] max-lg:w-[300px] overflow-hidden">
        <div
          className="flex gap-3 min-w-[1000px] touch-none contain-strict"
          ref={ref}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {alternateComments.map((val, i) => (
            <Comment
              key={i}
              text={val.text}
              title={val.title}
              author={val.author}
              image={val.image}
              preloadText={val.textPreload}
            />
          ))}
        </div>
      </ul>
    </section>
  );
}
