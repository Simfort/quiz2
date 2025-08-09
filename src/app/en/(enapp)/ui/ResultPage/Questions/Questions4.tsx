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
          4. How can I activate my subscription in the Kegel Men app?
        </h2>
        <p>
          If you purchased a subscription through the website and do not see
          your premium account, follow these steps:
        </p>
        <ul className="flex flex-col pl-[20px] ">
          <li>
            1. Click the tab <span className="font-bold">`Profile`</span> below.
          </li>
          <li>
            2. Click the icon <span className="font-bold">`Settings`</span> in
            the upper right corner.
          </li>
          <li>
            3. Select an option <span className="font-bold">`Get Premium`</span>{" "}
            in the menu.
          </li>
        </ul>
        <p>
          Your account will be restored with information about your
          subscription. If this doesn`t work, send an email to the address
          <a href="mailto:info@kegelmen.app" className="text-blue-600">
            info@kegelmen.app
          </a>
        </p>
      </motion.section>
    </motion.div>,
    document.body
  );
}
