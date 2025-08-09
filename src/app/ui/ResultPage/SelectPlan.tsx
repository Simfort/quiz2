"use client";
import plans from "@/app/lib/plans";
import { useState } from "react";
import PlanItem from "./PlanItem";
import Garant from "./Garant";
import CardForm from "./CardForm";
import { AnimatePresence } from "framer-motion";

export default function SelectPlan({ added }: { added: boolean }) {
  const [selected, setSelected] = useState(1);
  const [flag, setFlag] = useState(false);
  return (
    <section className="flex flex-col items-center gap-2 w-1/1">
      <h3 className="text-[20px] font-bold text-center">Выберите свой план</h3>
      <ul className="w-1/1 gap-3 flex flex-col">
        {plans.map((val, i) => (
          <PlanItem
            key={i}
            index={i}
            selected={selected == i}
            setSelected={setSelected}
            data={val}
          />
        ))}
      </ul>
      {added && (
        <div className="w-1/1 mt-[50px] gap-4 flex flex-col items-center ">
          <button
            onClick={() => setFlag(true)}
            className="bg-[#16B693] cursor-pointer h-[57px] w-[350px] text-[18px] rounded-[1rem] flex items-center justify-center font-bold max-lg:w-[300px]">
            ПОЛУЧИТЬ МОЙ ПЛАН
          </button>
          <p className="text-center text-[14px]">
            После предложения на {plans[selected].month} месяцы, подписка будет
            автоматически продлеваться в конце каждого 6 месяцы по цене{" "}
            {plans[selected].cost} грн..
          </p>
        </div>
      )}
      <AnimatePresence>
        {flag && <CardForm setFlag={setFlag} />}
      </AnimatePresence>
      {!added && (
        <section className="w-1/1 mt-[100px]">
          <Garant />
          <p className="text-[14px] text-center  mt-[100px]">
            Подписка будет автоматически продлена после {plans[selected].month}{" "}
            месяцы. Если вы не отмените подписку, каждый период продления будет
            взиматься плата в размере {plans[selected].cost} грн.. Вы можете
            отменить подписку в приложении.
          </p>
          <div className="w-1/1 bg-[#232537] h-[2px] mt-[100px]"></div>
        </section>
      )}
    </section>
  );
}
