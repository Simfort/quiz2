import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Question5({
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
          5. Как я могу получить доступ к счету за мою подписку?
        </h2>
        <p>
          Счет, информация о вашей подписке и ссылка на приложение Kegel Men
          будут отправлены на адрес электронной почты, указанный вами при
          покупке. Пожалуйста, убедитесь, что сохраните это письмо, которое
          содержит информацию о вашей подписке.
        </p>
      </motion.section>
    </motion.div>,
    document.body
  );
}
