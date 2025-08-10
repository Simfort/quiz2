"use client";
import plans from "../../lib/plans";
import { useState } from "react";
import PlanItem from "./PlanItem";
import Garant from "./Garant";
import CardForm from "./CardForm";

export default function SelectPlan({ added }: { added: boolean }) {
  const [selected, setSelected] = useState(1);
  const [flag, setFlag] = useState(false);
  return (
    <section className="flex flex-col items-center gap-2 w-1/1">
      <h3 className="text-[20px] font-bold text-center">Choose your plan</h3>
      <ul className="w-1/1 gap-3 flex flex-col items-center">
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
            GET MY PLAN
          </button>
          <p className="text-center text-[14px]">
            After the offer on {plans[selected].month} months, the subscription
            will be automatically renewed at the end of each 6 months at the
            price of {plans[selected].cost} USD.
          </p>
        </div>
      )}
      {flag && <CardForm setFlag={setFlag} />}
      {!added && (
        <section className="w-1/1 mt-[100px]">
          <Garant />
          <p className="text-[14px] text-center  mt-[100px]">
            The subscription will be automatically renewed after{" "}
            {plans[selected].month} months. If you do not cancel your
            subscription, you will be charged for each renewal period{" "}
            {plans[selected].cost} USD. You can cancel your subscription in the
            app.
          </p>
          <div className="w-1/1 bg-[#232537] h-[2px] mt-[100px]"></div>
        </section>
      )}
    </section>
  );
}
