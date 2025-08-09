"use client";
import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";
import { CheckIcon } from "lucide-react";

import { useEffect, useRef, useState } from "react";
import comments from "../lib/comment";
import Comment from "../ui/CreatingPage/Comment";
import Continue from "../ui/buttons/Continue";
import { useSearchParams } from "next/navigation";

export default function CreatingPlan() {
  const [plans, setPlans] = useState({
    zero: false,
    first: false,
    second: false,
    third: false,
  });
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  let startX: number = 0;
  let startTransform: number = 0;
  const search = useSearchParams().toString();
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

  useEffect(() => {
    const ti1 = setTimeout(() => {
      setPlans((prev) => ({ ...prev, zero: true }));
    }, 800);
    const ti2 = setTimeout(() => {
      setPlans((prev) => ({ ...prev, first: true }));
    }, 1600);
    const ti3 = setTimeout(() => {
      setPlans((prev) => ({ ...prev, second: true }));
    }, 2400);
    const ti4 = setTimeout(() => {
      setPlans((prev) => ({ ...prev, third: true }));
    }, 3000);
    return () => {
      clearTimeout(ti1);
      clearTimeout(ti2);
      clearTimeout(ti3);
      clearTimeout(ti4);
    };
  }, []);
  return (
    <div className="w-1/1 h-1/1 flex pt-[10px] flex-col items-center">
      <header className="gap-2 flex flex-col items-center">
        <Image src={logo} alt="logo" className="w-[54px] h-[54px]" />
        <p className="text-[16px] font-bold">Kegel Men App</p>
      </header>
      <main className="mt-[30px] w-[476px] max-lg:w-[300px]">
        <h2 className="text-[20px] font-bold">Личный план был создан!</h2>
        <div className="w-[476px] min-h-[185px] gap-10 flex flex-col items-center justify-center max-lg:w-[300px]">
          <ul className="mt-[50px] text-[13.6px] flex flex-col gap-5 font-[600] ">
            <p className=" flex items-center gap-2">
              <span
                className={`${
                  plans.zero ? "bg-[#16B693]" : "bg-white"
                }  text-black flex items-center justify-center h-[17px] w-[17px] rounded-full`}>
                <CheckIcon size={13} />
              </span>{" "}
              Данные были проанализированы
            </p>
            <p className=" flex items-center gap-2">
              <span
                className={`${
                  plans.first ? "bg-[#16B693]" : "bg-white"
                }  text-black flex items-center justify-center h-[17px] w-[17px] rounded-full`}>
                <CheckIcon size={13} />
              </span>{" "}
              Ваша тренировка по Кегелю была создана
            </p>
            <p className=" flex items-center gap-2">
              <span
                className={`${
                  plans.second ? "bg-[#16B693]" : "bg-white"
                }  text-black flex items-center justify-center h-[17px] w-[17px] rounded-full`}>
                <CheckIcon size={13} />
              </span>{" "}
              Были созданы фитнес и дыхательные упражнения
            </p>
            <p className=" flex items-center gap-2">
              <span
                className={`${
                  plans.third ? "bg-[#16B693]" : "bg-white"
                }  text-black flex items-center justify-center h-[17px] w-[17px] rounded-full`}>
                <CheckIcon size={13} />
              </span>{" "}
              План был загружен в приложение
            </p>
          </ul>
          <ul className="flex gap-4 w-[500px] relative h-[500px] max-lg:w-[300px] overflow-hidden">
            <div
              className="flex gap-3 min-w-[1000px] touch-none contain-strict"
              ref={ref}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}>
              {comments.map((val, i) => (
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
        </div>
        <div className="flex items-center w-1/1 justify-center relative">
          <Continue path="login" searchParams={search} />
        </div>
      </main>
    </div>
  );
}
