import kegel from "../../../../../../public/kegel.jpeg";
import Image from "next/image";

export default function Kegel() {
  return (
    <section className="w-1/1 bg-[rgb(25,26,38)] p-[1rem] rounded-[1rem]">
      <div className="w-1/1 flex flex-col items-center relative bottom-[50px]">
        <Image
          width={100}
          height={100}
          className="rounded-full object-cover"
          src={kegel}
          alt="kegel"
        />
        <h4 className="text-center">Dr. Arnold H. Kegel</h4>
      </div>
      <div>
        <h4 className="text-[1rem] font-bold">What are Kegel exercises?</h4>
        <ul className="text-[0.95rem] flex flex-col gap-2 list-disc p-5">
          <li>
            Kegel exercises are a scientifically proven type of exercise that
            strengthens the pelvic floor muscles to prevent and treat erectile
            dysfunction, premature ejaculation, and improve orgasm and sexual
            performance.
          </li>
          <li>
            By regularly performing Kegel exercises, you can last longer, have a
            harder erection, and experience more intense orgasms.
          </li>
        </ul>
      </div>
    </section>
  );
}
