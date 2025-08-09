import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Question3({
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
          3. Я приобрел подписку через веб-сайт, но приложение не открылось с
          моей информацией о подписке?
        </h2>
        <p>
          Если после загрузки приложения Kegel Men вы видите начальную страницу,
          где вас просят пройти тест заново, просто выберите опцию{" "}
          <span className="font-bold">`Already have an account? Sign In.`</span>
          .
        </p>
        <p>
          Вы сможете войти в приложение с информацией об аккаунте, которую вы
          создали ранее. Если вы все еще не видите свою подписку, ознакомьтесь с
          вопросом ниже.
        </p>
      </motion.section>
    </motion.div>,
    document.body
  );
}
