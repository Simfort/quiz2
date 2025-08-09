import Image from "next/image";
import proofImage from "@public/proof-image-ru.8772a0666eff9b3d945e.png";

export default function BeforeAfter() {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-[20px] font-bold text-center">
        Improve your sexual health with{" "}
        <span className="text-[#26d1a3]">
          with the help of scientifically proven
        </span>{" "}
        и <span className="text-[#26d1a3]">simple to perform</span> the method
        Kegels.
      </h3>
      <p className="text-[14px] text-center">
        {" "}
        More
        <span className="font-bold"> 5 million</span>
        Men are being used
        <span className="font-bold"> Kegel Men App.</span>
      </p>
      <Image src={proofImage} alt="proof" />
    </section>
  );
}
