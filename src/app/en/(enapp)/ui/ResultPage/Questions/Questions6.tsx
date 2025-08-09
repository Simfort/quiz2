import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Question6({
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
          6. How can I cancel my subscription?
        </h2>
        <p>
          You can cancel and manage a subscription purchased from the website by
          following these instructions:
        </p>
        <ul className="flex flex-col pl-[20px] ">
          <li>1. Log in to the Kegel Men app.</li>
          <li>
            2. Click the tab <span className="font-bold">`Profile`</span> below.
          </li>
          <li>
            3. Click the icon <span className="font-bold">`Settings`</span> in
            the upper right corner.
          </li>
          <li>
            4. Select an option{" "}
            <span className="font-bold">`Manage Subscription`</span> in the
            menu.
          </li>
        </ul>
        <p>
          You will be redirected to a website where you can manage and cancel
          your subscription.
        </p>
      </motion.section>
    </motion.div>,
    document.body
  );
}
