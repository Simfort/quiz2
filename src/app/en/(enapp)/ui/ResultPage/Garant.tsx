import access from "../../../../../../public/svg/access.svg";
import Image from "next/image";

export default function Garant() {
  return (
    <section className="w-1/1 min-h-[283px] bg-[#232537] p-[12.8px] rounded-[1.5rem] relative flex">
      <div className="h-1/1 w-1/1 border-[#007aff] flex flex-col items-center border-[1px] rounded-[1.5rem]">
        <Image
          src={access}
          className="absolute top-[-30px]"
          alt="access"
          width={90}
        />
        <div className="w-1/1 flex flex-col items-center mt-[50px] gap-4 p-[20px]">
          <h3 className="font-bold text-center text-[16px]">
            100% money-back guarantee
          </h3>
          <p className="text-[14px]">
            We strongly believe in the success of our method. Wait until you see
            the results! If you have followed the program diligently for the
            first 14 days after subscribing and have not seen the expected
            results, we are willing to refund your entire payment. For more
            information, please refer to the Refund Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
