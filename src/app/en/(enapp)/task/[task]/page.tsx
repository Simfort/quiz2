"use client";
import { motion } from "framer-motion";
import { useParams, useSearchParams } from "next/navigation";
import tasks from "../../lib/tasks";
import StartTask from "../../ui/TaskPage/StartTask";
import ImageTask from "../../ui/TaskPage/ImageTask";
import YesOrNo from "../../ui/TaskPage/YesOrNo";
import ClassicTask from "../../ui/TaskPage/ClassicTask";
import ManyTask from "../../ui/TaskPage/ManyTask";

export default function GoalSelection() {
  const task = Number(useParams()["task"]);

  return (
    <main className="flex items-center flex-col mt-[70px] ">
      {tasks[task].type == "start" && <StartTask data={tasks[task]} />}
      {tasks[task].type == "imaged" && <ImageTask data={tasks[task]} />}
      {tasks[task].type == "yesOrNo" && <YesOrNo data={tasks[task]} />}
      {tasks[task].type == "classic" && <ClassicTask data={tasks[task]} />}
      {tasks[task].type == "many" && <ManyTask data={tasks[task]} />}
    </main>
  );
}
