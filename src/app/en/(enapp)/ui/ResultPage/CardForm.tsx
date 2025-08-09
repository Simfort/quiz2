"use client";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Lock, X } from "lucide-react";
import { useEffect, useState } from "react";
import saveCard from "@/app/lib/actions/saveCard";
import ModalForm from "./ModalForm";

export default function CardForm({
  setFlag,
}: {
  setFlag: (arg: boolean) => void;
}) {
  const [card, setCard] = useState("");
  const [cardFlag, setCardFlag] = useState(false);
  const [flagClose, setCloseFlag] = useState(false);
  useEffect(() => {
    if (flagClose) {
      setFlag(false);
    }
    let timeout: NodeJS.Timeout;
    if (cardFlag) {
      timeout = setTimeout(() => {
        setFlag(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [cardFlag, flagClose]);
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="fixed top-0  bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.62)] w-1/1 h-screen flex items-center justify-center">
      <form
        action={saveCard}
        className="bg-[#191a25] p-[51px] max-lg:p-0 gap-2 flex flex-col rounded-[0.3rem]">
        {cardFlag ? (
          <h2 className="text-[32px] w-[500px] max-lg:w-[300px] font-medium text-center max-lg:text-[25px]">
            Thank you, the app is currently under development, but you are on
            the waiting list waiting. We will inform you as soon as it is ready
          </h2>
        ) : (
          <>
            {" "}
            <button
              onClick={() => setCloseFlag(true)}
              type="button"
              className=" h-[30px] cursor-pointer w-[30px] bg-[rgba(223,223,223,0.15)] flex items-center justify-center rounded-full">
              <X size={22} />
            </button>
            <h2 className="text-[32px] mb-[20px] font-medium text-center max-lg:text-[25px]">
              Confirm a secure payment
            </h2>
            <ModalForm
              card={card}
              setCard={setCard}
              setCardFlag={setCardFlag}
            />
          </>
        )}
      </form>
    </motion.div>,
    document.body
  );
}
