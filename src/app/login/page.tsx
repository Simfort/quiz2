"use client";
import { Lock, X } from "lucide-react";
import Link from "next/link";
import saveEmail from "../lib/actions/saveEmail";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
export default function Login() {
  const [email, setEmail] = useState("");

  const search = useSearchParams().toString();
  return (
    <main className="w-[476px] items-center max-lg:w-[300px] flex flex-col gap-10">
      <h2 className="text-[24px] text-center mt-[20px] font-bold">
        Введите свой адрес электронной почты, чтобы получить ваш персональный
        план
      </h2>
      <form
        action={saveEmail}
        className="max-lg:w-[300px] pt-[32px] pb-[32px] pl-[20px] pr-[20px] border-[0.5px] border-[#4d4f59] bg-[#222331]  w-[386px] rounded-[1.1rem] flex flex-col items-center gap-5">
        <label htmlFor="email" className="w-1/1 flex  relative">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-1/1 bg-[#30313d] rounded-[0.5rem] border-[1px] p-[9.6px] border-[#424353] shadow-[0px_0px_4px_rgba(0,0,0,0.25,0px_1px_6px_rgba(0,0,0,0.125))] outline-none"
            type="email"
            name="email"
            required
            placeholder="Введите ваш адрес электронной пояты"
          />
          {email && (
            <motion.div
              className="absolute ml-[94%] mt-[15px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <X
                onClick={() => setEmail("")}
                size={15}
                className="absolute text-black  bg-[#8995A3] rounded-full cursor-pointer "
              />
            </motion.div>
          )}
        </label>
        <div className="flex gap-3 w-1/1  ">
          <Lock size={40} className="mt-[5px] " />
          <p className="text-[14px]">
            Ваша информация находится под защитой нашей
            <Link
              className="text-[rgb(0,122,255)]"
              href={"https://kegelman.app/privacy-policy"}>
              {" "}
              политики конфиденциальности.
            </Link>
          </p>
        </div>
        <button
          onClick={() => {
            if (validateEmail(email)) {
              redirect("/result-screen?" + search);
            }
          }}
          className=" cursor-pointer h-[54px] w-1/1 max-lg:w-1/1 flex items-center justify-center bg-[#d1252b] text-white font-bold rounded-[1rem] text-[18px] ">
          Продолжить
        </button>
        <p className="text-[12px] text-center">
          Мы уважаем вашу конфиденциальность и стремимся защиты ваших
          персональных данных. Ваш e-mail будет используется в качестве
          уникального идентификатора вашего плана Кегеля.
        </p>
      </form>
    </main>
  );
}
