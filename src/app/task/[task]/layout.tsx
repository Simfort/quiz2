"use client";
import HeaderProgress from "@/app/ui/TaskPage/HeaderProgress";
import { motion } from "framer-motion";

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex w-1/1 h-1/1   flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeIn" }}>
      <HeaderProgress /> {children}
    </motion.div>
  );
}
