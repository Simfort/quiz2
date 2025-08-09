import Image from "next/image";
import proofImage from "../../../../public/proof-image-ru.8772a0666eff9b3d945e.png";

export default function BeforeAfter() {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-[20px] font-bold text-center">
        Улучшите свое сексуальное здоровье с{" "}
        <span className="text-[#26d1a3]">помощью научно доказанного</span> и{" "}
        <span className="text-[#26d1a3]">простого в исполнении</span> метода
        Кегеля.
      </h3>
      <p className="text-[14px] text-center">
        {" "}
        Более
        <span className="font-bold"> 5 миллиона</span>
        мужчин используют
        <span className="font-bold"> Kegel Men App.</span>
      </p>
      <Image src={proofImage} alt="proof" />
    </section>
  );
}
