import timer from "@public/svg/timer.svg";
import up from "@public/svg/up.svg";
import thunder from "@public/svg/thunder.svg";
import skin from "@public/skin.png";
import normal from "@public/normal.png";
import atlet from "@public/athlet.png";
import fat from "@public/fat.png";
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
    title: "Выберите свою цель",
    answers: [
      {
        text: "Дольше продержаться во время секса",
        image: timer,
      },
      {
        text: "Получите более интенсивный оргазм",
        image: up,
      },
      { text: "Усилить эрекцию", image: thunder },
    ],
    description:
      "Ваш план Кегеля подбирается в соответствии с выбранной вами целью. Прежде всего, вы должны выбрать свою цель.",
  },
  {
    id: 2,
    type: "imaged",
    title: "Выберите свой тип фигуры",
    answers: [
      {
        text: "Худой",
        image: skin,
      },
      {
        text: "Нормальный",
        image: normal,
      },
      { text: "Атлетичное", image: atlet as unknown as string },
      { text: "Лишний вес", image: fat as unknown as string },
    ],
  },
  {
    id: 3,
    type: "yesOrNo",
    title: "Слышали ли вы когда-нибудь о тренировке мышц тазового дна?",

    description:
      "Мышцы тазового дна (ТД) - это мышцы, которые удерживают ваши репродуктивные органы, кишечник и мочевой пузырь. Они начинаются от основания пениса и поднимаются к копчику. Эти упражнения используются для укрепления группы мышц (ТД).",
  },
  {
    id: 4,
    type: "classic",
    title: "У тебя проблемы с эрекцией?",
    answers: ["Да", "Иногда", "Часто", "Всегда"],
  },
  {
    id: 5,
    type: "yesOrNo",
    title:
      "Ты когда-нибудь использовал какие-либо добавки для поддержания эрекции?",
  },
  {
    id: 6,
    type: "classic",
    title: "Испытываете ли вы преждевременную эякуляцию?",
    answers: ["Да", "Иногда", "Часто", "Всегда"],
  },
  {
    id: 7,
    type: "classic",
    title: "Как обстоят дела с вашим сексуальным желанием?",
    answers: ["Низкий", "Среднее", "Высокий", "Очень высокий"],
  },
  {
    id: 8,
    type: "classic",
    title: "Как вы оцениваете удовольствие, которое вы получаете от оргазма?",
    answers: ["Недовольные", "Умеренно удовлетворен", "Очень удовлетворенный"],
  },
  {
    id: 9,
    type: "classic",
    title: "Как вы оцениваете качество своего сна?",
    answers: ["Низкий", "Среднее", "Высокий", "Очень высокий"],
  },
  {
    id: 10,
    type: "many",
    title: "Какие из них вы считаете своими привычками?",
    answers: [
      "Никто из них",
      "Курение",
      "Слишком много алкоголя",
      "Слишком много сахара",
      "Нездоровая пища",
      "Чрезмерное время работы с экраном",
    ],
  },
  {
    id: 11,
    type: "classic",
    title: "Как вы оцениваете уровень своего стресса?",
    answers: ["Низкий", "Среднее", "Высокий"],
  },
  { id: 12, type: "yesOrNo", title: "Ты принимаешь антидепрессанты?" },
  {
    id: 13,
    type: "classic",
    title: "Как часто вы смотрите порно?",
    answers: [
      "Никогда",
      "Мин. один раз в день",
      "3-4 раза в неделю",
      "1-2 раза в месяц",
    ],
  },
  {
    id: 14,
    type: "yesOrNo",
    title: "Чувствуете ли вы потребность в мочеиспускании в течение дня?",
    description:
      "Частота мочеиспускания дает представление о силе мышц тазового дна и работе мочевого пузыря.",
  },
  { id: 15, type: "yesOrNo", title: "У вас недержание мочи?" },
  {
    id: 16,
    type: "yesOrNo",
    title: "Регулярно ли вы испытываете проблемы с пищеварением?",
  },
  {
    id: 17,
    type: "yesOrNo",
    title: "Испытываете ли вы запоры?",
    description:
      "Наличие запоров дает представление о работе кишечника и напряжении мышц тазового дна.",
  },
];
export default tasks;
