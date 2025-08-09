"use client";
import { Task } from "@/app/lib/tasks";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { addProgress, setTask } from "@/app/store/actions/task";

export default function ClassicTask({ data }: { data: Task }) {
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
        router.push(`${data.id}?${textUrl}`);
      }
    }
  }, [selected, answeredTask, flag]);
  return (
    <section className="flex w-[476px] max-lg:w-[300px] items-center flex-col gap-[16px]">
      <h2 className="text-[24px] text-center font-bold max-lg:text-[18px]">
        {data.title}
      </h2>
      <ul className="flex w-1/1 flex-col gap-5">
        {data.answers?.map((val, i) => (
          <button
            onClick={() => {
              setFlag(true);
              dispatch(
                setTask({
                  task: data.id - 1,
                  value: i,
                })
              );
              dispatch(addProgress());
              setSelected(i);
            }}
            className={`${
              selected == i ? "bg-[#4d4f59]" : "bg-[#222331]"
            } w-1/1 flex rounded-[0.85rem] cursor-pointer p-[1rem] justify-center font-bold gap-[1rem] items-center`}
            key={i}>
            <p>{val as string}</p>
          </button>
        ))}{" "}
      </ul>
    </section>
  );
}
