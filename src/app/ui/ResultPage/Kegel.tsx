import kegel from "../../../../public/kegel.jpeg";
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
        <h4 className="text-[1rem] font-bold">Что такое упражнения Кегеля?</h4>
        <ul className="text-[0.95rem] flex flex-col gap-2 list-disc p-5">
          <li>
            Техника Кегеля - это научно обоснованный вид упражнений,
            направленный на укрепление мышц тазового дна для профилактики и
            лечения эректильной дисфункции, преждевременной эякуляции, улучшения
            оргазма и сексуальной активности.
          </li>
          <li>
            Регулярно выполняя упражнения Кегеля, вы сможете дольше
            продержаться, иметь более твердую эрекцию и яркие оргазмы.
          </li>
        </ul>
      </div>
    </section>
  );
}
