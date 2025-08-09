import Question1 from "../ui/ResultPage/Questions/Questions1";
import Question2 from "../ui/ResultPage/Questions/Questions2";
import Question3 from "../ui/ResultPage/Questions/Questions3";
import Question4 from "../ui/ResultPage/Questions/Questions4";
import Question5 from "../ui/ResultPage/Questions/Questions5";
import Question6 from "../ui/ResultPage/Questions/Questions6";

const questions = [
  {
    title: "How can I access my personalized Kegel plan?",
    content(setFlag: (arg: boolean) => void) {
      return <Question1 setFlag={setFlag} />;
    },
  },
  {
    title: "How can I log in to the Kegel Men app?",
    content(setFlag: (arg: boolean) => void) {
      return <Question2 setFlag={setFlag} />;
    },
  },
  {
    title:
      "I purchased a subscription through the website, but the app didn't open with my subscription information?",
    content(setFlag: (arg: boolean) => void) {
      return <Question3 setFlag={setFlag} />;
    },
  },
  {
    title: "How can I activate my subscription in the Kegel Men app?",
    content(setFlag: (arg: boolean) => void) {
      return <Question4 setFlag={setFlag} />;
    },
  },
  {
    title: "How can I access my subscription account?",
    content(setFlag: (arg: boolean) => void) {
      return <Question5 setFlag={setFlag} />;
    },
  },
  {
    title: "How can I cancel my subscription?",
    content(setFlag: (arg: boolean) => void) {
      return <Question6 setFlag={setFlag} />;
    },
  },
];
export default questions;
