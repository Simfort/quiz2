import Question1 from "../ui/ResultPage/Questions/Questions1";
import Question2 from "../ui/ResultPage/Questions/Questions2";
import Question3 from "../ui/ResultPage/Questions/Questions3";
import Question4 from "../ui/ResultPage/Questions/Questions4";
import Question5 from "../ui/ResultPage/Questions/Questions5";
import Question6 from "../ui/ResultPage/Questions/Questions6";

const questions = [
  {
    title: "Как я могу получить доступ к своему индивидуальному плану Кегеля?",
    content(setFlag: (arg: boolean) => void) {
      return <Question1 setFlag={setFlag} />;
    },
  },
  {
    title: "Как я могу войти в приложение Kegel Men?",
    content(setFlag: (arg: boolean) => void) {
      return <Question2 setFlag={setFlag} />;
    },
  },
  {
    title:
      "Я приобрел подписку через веб-сайт, но приложение не открылось с моей информацией о подписке?",
    content(setFlag: (arg: boolean) => void) {
      return <Question3 setFlag={setFlag} />;
    },
  },
  {
    title: "Как я могу активировать свою подписку в приложении Kegel Men?",
    content(setFlag: (arg: boolean) => void) {
      return <Question4 setFlag={setFlag} />;
    },
  },
  {
    title: "Как я могу получить доступ к счету за мою подписку?",
    content(setFlag: (arg: boolean) => void) {
      return <Question5 setFlag={setFlag} />;
    },
  },
  {
    title: "Как я могу отменить свою подписку?",
    content(setFlag: (arg: boolean) => void) {
      return <Question6 setFlag={setFlag} />;
    },
  },
];
export default questions;
