"use client";
import { Task } from "../../lib/tasks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { addProgress, setTask } from "@/app/store/actions/task";
import Link from "next/link";

export default function ManyTask({ data }: { data: Task }) {
  const { answeredTask } = useSelector(
    (state: {
      task: {
        answeredTask: { [key: string | number]: string | number | number[] };
      };
    }) => state.task
  );
  const [selected, setSelected] = useState<number[]>([1]);

  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams().toString();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (answeredTask[data.id - 1] && !flag) {
      setSelected(answeredTask[data.id - 1] as number[]);
    }
  }, []);
  useEffect(() => {
    if (selected.length > 0 && answeredTask) {
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
              dispatch(
                setTask({
                  task: data.id - 1,
                  value: [...selected, i],
                })
              );

              if (selected.includes(i)) {
                const indexI = selected.findIndex((val) => val == i);
                setSelected([
                  ...selected.slice(0, indexI),
                  ...selected.slice(indexI + 1),
                ]);
              } else if (i == 0) {
                setSelected([0]);
              } else if (selected.includes(0)) {
                const indexI = selected.findIndex((val) => val == 0);
                setSelected([
                  ...selected.slice(0, indexI),
                  ...selected.slice(indexI + 1),
                ]);
                setSelected((prev) => [...prev, i]);
              } else {
                setSelected((prev) => [...prev, i]);
              }
            }}
            className={`${
              selected.includes(i) ? "bg-[#4d4f59]" : "bg-[#222331]"
            } w-1/1 flex rounded-[0.85rem] cursor-pointer p-[1rem] justify-center font-bold gap-[1rem] items-center`}
            key={i}>
            <p>{val as string}</p>
          </button>
        ))}
      </ul>
      <button
        onClick={() => {
          setFlag(true);
          dispatch(addProgress());
        }}
        className="top-0 bottom-0 left-0 right-0  flex items-center justify-center">
        <Link
          href={data.id + "?" + searchParams}
          className="text-[18px] bg-[#d1252b] fixed top-[90%] w-[526px] flex items-center justify-center max-lg:w-[300px] h-[64px] p-[12px] font-bold rounded-[1rem]">
          Continue
        </Link>
      </button>
    </section>
  );
}
