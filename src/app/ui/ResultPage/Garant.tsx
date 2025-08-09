import access from "../../../../public/svg/access.svg";
import Image from "next/image";

export default function Garant() {
  return (
    <section className="w-1/1 h-[283px] bg-[#232537] p-[12.8px] rounded-[1.5rem] relative flex">
      <div className="h-1/1 w-1/1 border-[#007aff] flex flex-col items-center border-[1px] rounded-[1.5rem]">
        <Image
          src={access}
          className="absolute top-[-30px]"
          alt="access"
          width={90}
        />
        <div className="w-1/1 flex flex-col items-center mt-[50px] gap-4 p-[20px]">
          <h3 className="font-bold text-center text-[16px]">
            100% гарантия возврата денег
          </h3>
          <p className="text-[14px]">
            Мы твердо верим в успех нашего метода. Подождите, пока не увидите
            результаты! Если вы дисциплинированно следовали программе в течение
            первых 14 дней после начала подписки и не увидели ожидаемых
            результатов, мы готовы вернуть вам всю сумму оплаты. Для получения
            подробной информации ознакомьтесь с Положением о возврате средств.
          </p>
        </div>
      </div>
    </section>
  );
}
