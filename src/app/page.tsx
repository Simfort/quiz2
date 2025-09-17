"use client";
import Image from "next/image";
import kegel from "../../public/Kegel Power v5.png";
import star from "../../public/svg/star.svg";
import AgeEl from "./ui/AgePage/AgeEl";
import men1 from "../../public/man1.bc3ebbe140ae8bdaf27d.png";
import men2 from "../../public/man2.6f19efbe89efae396a79.png";
import men3 from "../../public/man3.2fb8ec0969d0d25eaf98 (1).png";
import policy from "../../public/svg/policy.svg";
import Link from "next/link";
import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const search = useSearchParams().toString();
  const { REDIRECT_FLAG } = useSelector(
    (state: { task: { REDIRECT_FLAG: boolean } }) => state.task
  );
  useEffect(() => {
    if (!REDIRECT_FLAG) {
      redirect("/en?" + search);
    }
  }, []);
  return (
    <div className="w-[461px] max-lg:w-[300px] pt-[30px] flex flex-col gap-[30px]">
      <header className="flex flex-col fixed top-0 left-0 right-0 bottom-0 h-[100px] p-[10px]  w-1/1 items-center gap-4  bg-[rgb(9,10,36)] z-[1000]">
        <Image src={kegel} alt="logo" width={54} />
        <ol className="flex gap-2">
          {new Array(5).fill(null).map((val, i) => (
            <Image width={15} key={i} src={star} alt="star" />
          ))}
          <p className="font-bold ml-[10px]">4.8/5</p>{" "}
          <Link href="/en" className="text-[16px]  text-blue-500">
            En
          </Link>
        </ol>
      </header>
      <h1 className="text-[24px] mt-[100px] text-center font-bold">
        Выберите свой возрастной диапазон для начала
      </h1>
      <p className="text-[#8995A3] text-[18px] text-center">
        1-МИНУТНАЯ ВИКТОРИНА ДЛЯ ПЕРСОНАЛЬНОГО ПЛАНА КЕГЕЛЯ
      </p>
      <div className="flex gap-4 w-1/1">
        <ul className="flex gap-4 max-sm:flex-col justify-center w-1/1 items-center">
          <AgeEl image={men1} text="18-30" />
          <AgeEl image={men2} text="31-55" />
          <AgeEl image={men3} text="55+" />
        </ul>
      </div>
      <div className="text-[14px] flex gap-2 items-start">
        <Image src={policy} alt="policy" width={22} />
        <p>
          <span className="font-bold">
            Выбирая свой возраст и продолжая, вы соглашаетесь с нашими
          </span>{" "}
          <Link
            href="https://www.termsfeed.com/live/2b2a27ed-1a1c-4ada-b6b8-d5a6cdc246f3"
            className="text-[#007aff]">
            Условиями использования{" "}
          </Link>
          |
          <Link
            href=" https://www.termsfeed.com/live/c61a8a44-f66d-4669-ad9f-faee10d11010"
            className="text-[#007aff]">
            {" "}
            Политика конфиденциальности.
          </Link>
        </p>
      </div>
    </div>
  );
}
