"use client";
import questions from "@/app/lib/questions";
import { Plus } from "lucide-react";
import { useState } from "react";
import QuestItem from "./QuestItem";

export default function MostPopularQuestions() {
  return (
    <section className="w-1/1 flex flex-col gap-5 items-center">
      <h2 className="text-[20px] font-bold">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      <ul className="flex  flex-col gap-2 w-1/1">
        {questions.map((val, i) => (
          <QuestItem key={i} title={val.title} content={val.content} i={i} />
        ))}
      </ul>
    </section>
  );
}
