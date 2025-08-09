import logo from "@public/Kegel Power v5.png";
import Image from "next/image";
import crown from "@public/svg/crown.svg";
import table from "@/app/lib/table";
import { CheckIcon, Lock } from "lucide-react";

export default function KegelTable() {
  return (
    <section className="bg-[rgb(25,26,38)] rounded-[0.625rem] gap-5 flex flex-col p-[20.6px]">
      <div className="flex justify-between font-bold   text-[13px]">
        <div className="flex gap-2">
          <Image width={24} src={logo} alt="logo" />
          Kegel Men App
        </div>
        <div className="flex gap-7 items-center">
          <p>Бесплатно</p>
          <p className="text-[#CAAC78] flex gap-1 items-center">
            <Image src={crown} alt="crown" />
            Премиум
          </p>
        </div>
      </div>
      <div className="w-1/1 bg-[rgb(94,100,126)] h-[1px]"></div>
      <ul className="flex flex-col gap-5">
        {table.map((val, i) => (
          <div key={i} className="flex justify-between   text-[15px]">
            <div className="flex gap-2">{val.title}</div>
            <div className="flex w-[190px]  items-center justify-around w">
              <p className="flex justify-center">
                {val.lock ? (
                  <Lock size={20} />
                ) : (
                  <CheckIcon size={20} className="text-[rgb(38,209,163)]" />
                )}
              </p>
              <p className="text-[#CAAC78] flex gap-1 justify-center items-center">
                <CheckIcon size={20} className="text-[rgb(38,209,163)]" />
              </p>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
