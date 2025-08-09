"use client";
import { Plan } from "@/app/lib/plans";
import like from "@public/svg/like.svg";
import Image from "next/image";

export default function PlanItem({
  data,
  selected,
  setSelected,
  index,
}: {
  data: Plan;
  index: number;
  selected: boolean;
  setSelected: (arg: number) => void;
}) {
  const stay = data.stay.split(",");
  return (
    <div
      onClick={() => setSelected(index)}
      className={`${
        selected ? " border-[#16B693]" : " border-[#232537]"
      } w-1/1 ${
        index == 1 ? "h-[116px]" : ""
      }  h-[88px] border-[2px] transition-all duration-100 cursor-pointer ease-in flex-col flex  bg-[#232537] rounded-[1rem]`}>
      {index == 1 && (
        <div className="bg-[#16B693] rounded-tl-[1rem] flex items-center justify-center rounded-tr-[1rem]">
          <Image src={like} alt="like" width={28} />
          САМЫЕ ПОПУЛЯРНЫЕ
        </div>
      )}
      <div className="flex  p-[22px] w-1/1 h-1/1 justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="border-[#16B693] p-[2px] border-2 rounded-full h-[22px] w-[22px]">
            {selected && (
              <div className="bg-[#16B693] rounded-full h-1/1 w-1/1"></div>
            )}
          </button>
          <p className="text-[18px] font-bold">{data.month} месяц</p>
        </div>
        <div className="flex items-center gap-5">
          <span className="line-through text-[14px] text-[#8995A3] font-bold">
            {data.was} грн.
          </span>
          <p className="flex items-center">
            <span className="text-[28px] font-medium ">грн.</span>
            <span className="text-[36px] font-medium">{stay[0]}</span>
            <span className="flex flex-col  items-center">
              <span className="text-[20px] font-bold">,{stay[1]}</span>
              <span className="text-[10px] font-bold">в день</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
