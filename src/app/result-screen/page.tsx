"use client";
import logo from "@public/Kegel Power v5.png";
import Image from "next/image";
import BeforeAfter from "../ui/ResultPage/BeforeAfter";
import SelectPlan from "../ui/ResultPage/SelectPlan";
import WillPlan from "../ui/ResultPage/WillPlan";
import Kegel from "../ui/ResultPage/Kegel";
import Reviews from "../ui/ResultPage/Reviews";
import multiple from "@public/multiple-institutions.3de131a84e6f5699830e.png";
import KegelTable from "../ui/ResultPage/KegelTable";
import CallLive from "../ui/ResultPage/CallLive";
import MostPopularQuestions from "../ui/ResultPage/MostPopularQuestions";
import GivePlan from "../ui/buttons/GivePlan";
import { useEffect, useState } from "react";

export default function ResultScreen() {
  const [flag, setFlag] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Добавляем обработчик события
    window.addEventListener("scroll", handleScroll);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
    if (scrollPosition >= 400) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [scrollPosition]);
  return (
    <main className="flex mt-[140px] w-1/1 items-center flex-col">
      <section className="w-[476px] max-lg:w-[300px] flex flex-col gap-15">
        <h4 className="text-[14px] w-1/1 font-bold flex gap-4">
          <Image src={logo} alt="logo" width={32} />
          Kegel Men App
        </h4>
        <BeforeAfter />
        <SelectPlan added={true} />
        <WillPlan />
        <Kegel />
        <Reviews />
        <section className="flex flex-col gap-10">
          <h3 className="text-[20px] font-bold text-center ">
            {" "}
            Упражнения Кегеля рекомендуются
          </h3>
          <Image src={multiple} alt="multiple" />
        </section>
        <KegelTable />
        <CallLive />
        <SelectPlan added={false} />
        <MostPopularQuestions />
        {flag && <GivePlan />}
      </section>
    </main>
  );
}
