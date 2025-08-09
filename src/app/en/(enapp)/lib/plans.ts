export interface Plan {
  month: number;
  was: string;
  stay: string;
  cost: string;
}
const plans: Plan[] = [
  { month: 1, was: "27,63", stay: "13,82", cost: "829,00" },
  { month: 6, was: "15,56", stay: "7,78", cost: "2800,00" },
  { month: 3, was: "18,06", stay: "9,03", cost: "1625,00" },
];

export const willPlans = [
  {
    title: "Kegel:",
    text: "A beginner's Kegel exercise program consisting of 3 sessions per day has been created. We recommend performing at least 2 sessions per day.",
  },
  {
    title: "Fitness:",
    text: "Strong abdominal and leg muscles increase sexual desire and performance. Beginner fitness exercises have been added to your program to strengthen these muscle groups.",
  },
  {
    title: "Breathing:",
    text: "Proper breathing control reduces body and mind tension, increasing focus on sexual results. Breathing techniques created especially for you have been added to your program.",
  },
];

export default plans;
