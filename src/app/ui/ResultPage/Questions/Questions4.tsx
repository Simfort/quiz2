import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Question4({
  setFlag,
}: {
  setFlag: (arg: boolean) => void;
}) {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="fixed top-0 z-[1000]  bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.62)] w-1/1 h-screen flex items-center justify-center">
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
          4 . Как я могу активировать свою подписку в приложении Kegel Men?
        </h2>
        <p>
          Если вы приобрели подписку через веб-сайт и не видите свой
          премиум-аккаунт, выполните следующие действия:
        </p>
        <ul className="flex flex-col pl-[20px] ">
          <li>
            1. Нажмите вкладку <span className="font-bold">`Профиль`</span>{" "}
            внизу.
          </li>
          <li>
            2. Нажмите значок <span className="font-bold">`Настройки`</span> в
            правом верхнем углу.
          </li>
          <li>
            3. Выберите опцию <span className="font-bold">`Get Premium`</span> в
            меню.
          </li>
        </ul>
        <p>
          Ваш аккаунт будет восстановлен с информацией о вашей подписке. Если
          это не сработало, отправьте письмо на адрес
          <a href="mailto:info@kegelmen.app" className="text-blue-600">
            info@kegelmen.app
          </a>
        </p>
      </motion.section>
    </motion.div>,
    document.body
  );
}
