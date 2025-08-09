import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Question1({
  setFlag,
}: {
  setFlag: (arg: boolean) => void;
}) {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="fixed top-0  bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.62)] w-1/1 h-screen flex items-center justify-center">
      <motion.section
        initial={{ translateY: "-100px" }}
        animate={{ translateY: "0px" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className=" bg-[#232537] p-[20px] w-[500px] flex flex-col gap-5 max-lg:w-[300px] ">
        <button
          onClick={() => setFlag(false)}
          className="w-1/1 flex justify-end cursor-pointer">
          <X size={32} />
        </button>
        <h2 className="font-medium text-[20px]">
          1. Как я могу получить доступ к своему индивидуальному плану Кегеля?
        </h2>
        <p>
          Это просто: выберите свою цель и пройдите тест, созданный экспертами и
          физиотерапевтами. После подтверждения покупки вы будете перенаправлены
          в App Store или Google Play Store, чтобы скачать приложение Kegel Men.
          После загрузки приложения Kegel Men вы сможете получить доступ к
          вашему персональному плану упражнений внутри приложения.
        </p>
        <p>
          После покупки вашей подписки на ваш адрес электронной почты, указанный
          вами при покупке, будет отправлено письмо с информацией о вашей
          подписке на Kegel Men Premium и счетом за вашу покупку.
        </p>
        <p>
          Ссылка на приложение Kegel Men также будет доступна в письме. Таким
          образом, вы можете перейти по ссылке и загрузить приложение Kegel Men
          оттуда.
        </p>
      </motion.section>
    </motion.div>,
    document.body
  );
}
