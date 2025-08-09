"use client";
import Image from "next/image";
import kegel from "@public/Kegel Power v5.png";
import star from "@public/svg/star.svg";
import mans from "@public/triple-man.7e81c53c1ad72257decf.png";
import Continue from "../ui/buttons/Continue";
import { useSearchParams } from "next/navigation";

export default function SocialProf() {
  const searchParams = useSearchParams();
  return (
    <div className="w-[476px] max-lg:w-[300px] flex flex-col">
      {" "}
      <header className="flex flex-col fixed top-0 left-0 right-0 bottom-0 h-[100px] p-[10px]  w-1/1 items-center gap-4  bg-[rgb(9,10,36)] z-[1000]">
        <Image src={kegel} alt="logo" width={54} />
        <ol className="flex gap-1">
          {new Array(5).fill(null).map((val, i) => (
            <Image width={15} key={i} src={star} alt="star" />
          ))}
          <p className="font-bold ml-[10px]">4.8/5</p>
        </ol>
      </header>
      <div className="mt-[140px]">
        <h1 className="text-[24px] text-center font-bold">
          Дарящий силу{" "}
          <span className="bg-[rgb(38,209,163)] p-[0_0.25rem] text-black">
            5 миллиону
          </span>{" "}
          мужчин по всему миру:
        </h1>{" "}
        <p className="text-[24px] font-bold text-center">Kegel Men</p>
      </div>
      <p className="text-[14px] text-center mt-[20px]">
        Kegel Men был создан на основе научно доказанного метода Кегеля и создан
        совместно с терапевтами тазового дна.
      </p>
      <Image src={mans} alt="mans" className="w-1/1 mt-[10px]" />
      <div className="w-1/1 relative flex items-center justify-center">
        <Continue
          path="task/0"
          searchParams={`age=${searchParams.get("age")}`}
        />
      </div>
    </div>
  );
}
