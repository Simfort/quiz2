"use client";
import { Task } from "@/app/lib/tasks";
import Image from "next/image";

import { useEffect, useState } from "react";
import policy from "../../../../public/svg/policy.svg";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { addProgress, setTask } from "@/app/store/actions/task";

export default function YesOrNo({ data }: { data: Task }) {
  const { answeredTask } = useSelector(
    (state: {
      task: {
        answeredTask: { [key: string | number]: string | number | number[] };
      };
    }) => state.task
  );
  const [selected, setSelected] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (!answeredTask["age"]) {
      const searches = searchParams.entries();
      for (const item of searches) {
        dispatch(setTask({ task: item[0], value: item[1] }));
      }
    }
    if (answeredTask[data.id - 1] && !flag) {
      setSelected(answeredTask[data.id - 1] as number);
    }
    if (selected !== -1 && answeredTask) {
      const textUrl = Object.keys(answeredTask).reduce((acc, key) => {
        if (key === "age") {
          acc += `&${key}=${answeredTask[key]}`;
        } else if (answeredTask[+key] !== null) {
          acc += `&${key}=${answeredTask[+key]}`;
        }
        return acc;
      }, "");
      if (flag) {
        console.log(data.id);
        if (data.id < 17) {
          router.push(`${data.id}?${textUrl}`);
        } else {
          router.push(`/creating-plan?${textUrl}`);
        }
      }
    }
  }, [selected, answeredTask, flag]);
  return (
    <section className="flex w-[476px] max-lg:w-[300px] items-center flex-col gap-15 max-lg:gap-10">
      <h2 className="text-[24px] text-center font-bold max-lg:text-[18px]">
        {data.title}
      </h2>
      <ul className="flex justify-center gap-5 w-1/1">
        <button
          onClick={() => {
            setFlag(true);
            dispatch(
              setTask({
                task: data.id - 1,
                value: 0,
              })
            );
            dispatch(addProgress());
            setSelected(0);
          }}
          className={`${
            selected == 0 ? "bg-[#4d4f59]" : "bg-[#222331]"
          } w-1/2 h-[100px]  flex gap-14 rounded-[0.85rem] cursor-pointer  justify-center   items-center text-[18px] font-bold`}>
          Да
        </button>
        <button
          onClick={() => {
            setFlag(true);
            dispatch(
              setTask({
                task: data.id - 1,
                value: 1,
              })
            );
            dispatch(addProgress());
            setSelected(1);
          }}
          className={`${
            selected == 1 ? "bg-[#4d4f59]" : "bg-[#222331]"
          } w-1/2 h-[100px]  flex gap-14 rounded-[0.85rem] cursor-pointer  justify-center  items-center text-[18px] font-bold`}>
          No
        </button>
      </ul>
      {data.description && (
        <div className="text-[14px] w-[444px] max-lg:w-[300px] text-[#ffffffb3]  flex gap-2 items-start">
          <Image className="opacity-70" src={policy} alt="policy" width={22} />
          <p>{data.description}</p>
        </div>
      )}
    </section>
  );
}
