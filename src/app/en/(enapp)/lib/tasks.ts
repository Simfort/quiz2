import timer from "../../../../../public/svg/timer.svg";
import up from "../../../../../public/svg/up.svg";
import thunder from "../../../../../public/svg/thunder.svg";
import skin from "../../../../../public/skin.png";
import normal from "../../../../../public/normal.png";
import atlet from "../../../../../public/athlet.png";
import fat from "../../../../../public/fat.png";
import { StaticImageData } from "next/image";

export interface Task {
  id: number;
  type: "start" | "imaged" | "yesOrNo" | "classic" | "many";
  title: string;
  answers?: ({ text: string; image: string | StaticImageData } | string)[];
  description?: string;
}

const tasks: Task[] = [
  {
    id: 1,
    type: "start",
    title: "Choose your goal",
    answers: [
      {
        text: "Last longer during sex",
        image: timer,
      },
      {
        text: "Get a more intense orgasm",
        image: up,
      },
      { text: "Enhance Erection", image: thunder },
    ],
    description:
      "Your Kegel plan is customized according to your chosen goal. First, you must choose your goal.",
  },
  {
    id: 2,
    type: "imaged",
    title: "Choose your shape type",
    answers: [
      {
        text: "Skinny",
        image: skin,
      },
      {
        text: "Normal",
        image: normal,
      },
      { text: "Athletic", image: atlet as unknown as string },
      { text: "Excess weight", image: fat as unknown as string },
    ],
  },
  {
    id: 3,
    type: "yesOrNo",
    title: "Have you ever heard of pelvic floor training?",

    description:
      "The pelvic floor muscles (PF) are the muscles that support your reproductive organs, intestines, and bladder. They start at the base of the penis and extend upward to the coccyx. These exercises are designed to strengthen the pelvic floor muscles (PF).",
  },
  {
    id: 4,
    type: "classic",
    title: "Are you having trouble getting an erection?",
    answers: ["Yes", "Sometimes", "Often", "Always"],
  },
  {
    id: 5,
    type: "yesOrNo",
    title: "Have you ever used any supplements to maintain an erection?",
  },
  {
    id: 6,
    type: "classic",
    title: "Do you experience premature ejaculation?",
    answers: ["Yes", "Sometimes", "Often", "Always"],
  },
  {
    id: 7,
    type: "classic",
    title: "How is your sexual desire?",
    answers: ["Low", "Medium", "High", "Very High"],
  },
  {
    id: 8,
    type: "classic",
    title: "How do you rate the pleasure you get from orgasm?",
    answers: ["Dissatisfied", "Moderately satisfied", "Very satisfied"],
  },
  {
    id: 9,
    type: "classic",
    title: "How do you rate the quality of your sleep?",
    answers: ["Low", "Medium", "High", "Very High"],
  },
  {
    id: 10,
    type: "many",
    title: "Which of these do you consider to be your habits?",
    answers: [
      "None of them",
      "Smoking",
      "Too much alcohol",
      "Too much sugar",
      "Unhealthy food",
      "Excessive screen time",
    ],
  },
  {
    id: 11,
    type: "classic",
    title: "How do you assess your stress level?",
    answers: ["Low", "Medium", "High"],
  },
  { id: 12, type: "yesOrNo", title: "Are you taking antidepressants?" },
  {
    id: 13,
    type: "classic",
    title: "How often do you watch porn?",
    answers: [
      "Never",
      "Min. once a day",
      "3-4 times a week",
      "1-2 times a month",
    ],
  },
  {
    id: 14,
    type: "yesOrNo",
    title: "Do you feel the need to urinate throughout the day?",
    description:
      "The frequency of urination provides information about the strength of the pelvic floor muscles and the functioning of the bladder.",
  },
  { id: 15, type: "yesOrNo", title: "Do you have urinary incontinence?" },
  {
    id: 16,
    type: "yesOrNo",
    title: "Do you experience digestive problems regularly?",
  },
  {
    id: 17,
    type: "yesOrNo",
    title: "Do you experience constipation?",
    description:
      "The presence of constipation provides information about bowel function and pelvic floor muscle tension.",
  },
];
export default tasks;
