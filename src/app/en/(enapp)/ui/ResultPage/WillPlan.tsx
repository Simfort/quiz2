import kegel from "@public/kegel-1.jpg";
import fitness from "@public/fitness-1.jpg";
import breathing from "@public/breathing-1.jpg";
import crown from "@public/svg/crown.svg";
import Image from "next/image";
import { willPlans } from "../../lib/plans";

export default function WillPlan() {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-[20px] font-bold ">What awaits you in your plan?</h3>
      <ol className="flex gap-3  max-lg:flex-wrap max-lg:justify-center">
        <Image width={150} src={kegel} alt="kegel" className="rounded-[12px]" />
        <Image
          width={150}
          src={fitness}
          alt="fitness"
          className="rounded-[12px]"
        />
        <Image
          width={150}
          src={breathing}
          alt="breathing"
          className="rounded-[12px]"
        />
      </ol>
      <ul className="flex flex-col gap-5">
        {willPlans.map((val, i) => (
          <div key={i} className="flex gap-4 items-start">
            <Image width={24} src={crown} alt="crown" />
            <p className="text-[14px] font-medium  ">
              <span className="font-bold">{val.title}</span>
              {val.text}
            </p>
          </div>
        ))}
      </ul>
      <p className="text-center font-medium mt-[30px] text-[12px]">
        Disclaimer: If you experience frequent constipation, urinary tract
        infections, or pelvic or bladder pain while exercising, you should seek
        professional help.
      </p>
    </section>
  );
}
