import { Lock, LockIcon, X } from "lucide-react";
import { useState } from "react";
import stripe from "@public/stripe-logo.png";
import cardsBrands from "@public/CardBrand.png";
import cardLogo from "@public/svg/card-svgrepo-com.svg";
import payPal from "@public/svg/paypal-svgrepo-com.svg";
import Image from "next/image";
import visa from "@public/svg/8408-visa_102499.svg";
import masterCard from "@public/svg/-mastercard_86833.svg";
import apex from "@public/svg/1490135020-american-express_82257.svg";
import crcard from "@public/svg/credit-card-back-side-svgrepo-com.svg";
import unpay from "@public/659f86dd1e3b7cd69c73a14c_Supported-unionpay.webp";

export default function ModalForm({
  setCard,
  setCardFlag,
  card,
}: {
  setCard: (arg: string) => void;
  setCardFlag: (arg: boolean) => void;
  card: string;
}) {
  const [selected, setSelected] = useState(0);
  return (
    <section className="grid gap-10 w-[1000px]  grid-cols-2">
      <div className="flex-col gap-[50px] flex">
        <div className="font-bold justify-between flex">
          <p>Общая цена </p>
          <p>27,60 £</p>
        </div>
        <div>
          <div className="flex items-center w-[400px] max-lg:w-[300px] gap-5 border-b-1 pb-5 border-gray-700">
            <p className="flex gap-2 items-center text-[14px]">
              {" "}
              <LockIcon width={20} />
              <span>
                {" "}
                Quaranteed <span className="font-bold">safe & secure</span>{" "}
                checkout
              </span>
            </p>
            <Image width={100} src={stripe} alt="stripe powered" />
          </div>
          <div className="mt-[24px] flex gap-2 items-center">
            <Image width={300} src={cardsBrands} alt="brands cards" />
            <Image src={unpay} width={50} className="h-[25px]" alt="unpay" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="relative items-center " htmlFor="card">
          <input
            type="text"
            placeholder="Имя владельца карты"
            className="rounded-[0.313rem] w-1/1  bg-[#30313d] p-[1rem] border-[1px] border-[#424353] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5), 0px_1px_6px_rgba(0, 0, 0, 0.25)]"
          />
        </label>
        <label className="flex gap-2" htmlFor="">
          <button
            onClick={() => setSelected(0)}
            className={`rounded-[0.313rem] cursor-pointer flex font-bold  flex-col gap-2 w-1/1  ${
              selected == 0 ? "bg-[#4ad58d] text-gray-800" : "bg-[#30313d]"
            } h-[80px] text-[rgb(127,127,127)] p-[1rem] border-[1px] border-[#424353] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5), 0px_1px_6px_rgba(0, 0, 0, 0.25)]"
            type="button`}>
            <Image width={20} src={cardLogo} alt="card icon" />
            Карта
          </button>
          <button
            onClick={() => setSelected(1)}
            type="button"
            className={`rounded-[0.313rem] cursor-pointer flex font-bold  flex-col gap-2 w-1/1  ${
              selected == 1 ? "bg-[#4ad58d] text-gray-800" : "bg-[#30313d]"
            } text-[rgb(127,127,127)] h-[80px] p-[1rem] border-[1px] border-[#424353] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5), 0px_1px_6px_rgba(0, 0, 0, 0.25)]"
            `}>
            <Image width={20} src={payPal} alt="paypal icon" />
            PayPal
          </button>
        </label>
        <label className="relative flex justify-end items-center" htmlFor="">
          <input
            value={card}
            onChange={(e) => setCard(e.target.value)}
            name="card"
            type="text"
            placeholder="Номер карты"
            className="rounded-[0.313rem] w-1/1  bg-[#30313d] p-[1rem] border-[1px] border-[#424353] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5), 0px_1px_6px_rgba(0, 0, 0, 0.25)]"
          />
          <div className="flex gap-2 absolute mr-[15px]">
            <Image src={visa} alt="mcard" width={40} />
            <Image src={masterCard} alt="mcard" width={40} />
            <Image src={apex} alt="mcard" width={40} />
          </div>
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Окончание срока действия"
            className="rounded-[0.313rem] w-1/1  bg-[#30313d] p-[1rem] border-[1px] border-[#424353] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5), 0px_1px_6px_rgba(0, 0, 0, 0.25)]"
          />
        </label>
        <label className="relative flex justify-end items-center" htmlFor="">
          <input
            type="text"
            placeholder="Код безопасности"
            maxLength={3}
            className="rounded-[0.313rem] w-1/1  bg-[#30313d] p-[1rem] border-[1px] border-[#424353] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.5), 0px_1px_6px_rgba(0, 0, 0, 0.25)]"
          />
          <Image
            width={40}
            src={crcard}
            className="absolute mr-[10px] text-white"
            alt="credit card"
          />
        </label>
        <button
          onClick={() => {
            setCardFlag(true);
          }}
          type="submit"
          className={` w-1/1
        bg-[#16B693] mt-[20px] h-[57px] gap-2 cursor-pointer text-[18px] rounded-[1rem] flex items-center justify-center font-bold max-lg:w-[300px]`}>
          <Lock size={20} />
          ПРОДОЛЖИТЬ
        </button>
      </div>
    </section>
  );
}
