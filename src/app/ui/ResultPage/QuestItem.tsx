"use client";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function QuestItem({
  title,
  i,
  content,
}: {
  title: string;

  content: (arg: (arg: boolean) => void) => React.ReactNode;
  i: number;
}) {
  const [flag, setFlag] = useState(false);
  return (
    <li className=" text-[14px] font-medium bg-[#232537] gap-5 rounded-[9.6px] p-[16px] justify-between flex items-center  w-1/1">
      <span className="font-bold">
        {i + 1}. <span className="font-medium">{title}</span>
      </span>
      <button onClick={() => setFlag(true)} className="cursor-pointer">
        <Plus size={22} />
      </button>
      {flag && content(setFlag)}
    </li>
  );
}
