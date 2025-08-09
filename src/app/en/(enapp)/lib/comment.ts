export interface Comment {
  title: string;
  textPreload: string;
  image: string;
  author: string;
  text: string;
}

const comments: Comment[] = [
  {
    title: "I continue to follow my plan and have started seeing results!",
    textPreload:
      "I've already tried other Kegel exercise apps, but Kegel Men is definitely the best.",
    image:
      "https://kegelmen.dgt-assets.com/kegelman-app/category/result-screen/user-1-ru.jpg",
    text: "I've tried other kegel exercise apps, but Kegel Men is by far the best. The guidance and articles are informative and helpful, and the personalized exercise plan makes it easy to stick to.",
    author: "Ivan L.",
  },
  {
    title: "The app changed everything",
    textPreload:
      "Kegel Men has changed my life. The personalized exercise plan is easy to follow,...",
    image:
      "https://kegelmen.dgt-assets.com/kegelman-app/category/result-screen/user-2.jpg",
    text: "Kegel Men has changed my life. The personalized exercise plan is easy to follow, and the reminders help you stay on track. What sets this app apart is its focus on improving not only sexual health, but also overall fitness and well-being.",
    author: "Dmitry K.",
  },
  {
    title: "Saved my life.",
    textPreload:
      "I was skeptical at first, but Kegel Men helped me manage my erectile...",
    image:
      "https://kegelmen.dgt-assets.com/kegelman-app/category/result-screen/user-3-ru.jpg",
    author: "Alexander A.",
    text: "I was skeptical at first, but Kegel Men helped me manage my erectile dysfunction. The app is easy to use, and the exercises keep me motivated.",
  },
];

export const alternateComments = [
  {
    title: "The app changed everything",
    textPreload:
      "I've already tried other Kegel exercise apps, but Kegel Men is definitely the best.",
    image:
      "https://kegelmen.dgt-assets.com/kegelman-app/category/result-screen/user-1-ru.jpg",
    text: "I've tried other kegel exercise apps, but Kegel Men is by far the best. The guidance and articles are informative and helpful, and the personalized exercise plan makes it easy to stick to.",
    author: "Ivan L.",
  },
  {
    title: "I continue to follow my plan and have started seeing results!",
    textPreload:
      "Kegel Men has changed my life. The personalized exercise plan is easy to follow,...",
    image:
      "https://kegelmen.dgt-assets.com/kegelman-app/category/result-screen/user-2.jpg",
    text: "Kegel Men has changed my life. The personalized exercise plan is easy to follow, and the reminders help you stay on track. What sets this app apart is its focus on improving not only sexual health, but also overall fitness and well-being.",
    author: "Dmitry K.",
  },
  {
    title: "Saved my life.",
    textPreload:
      "I was skeptical at first, but Kegel Men helped me manage my erectile...",
    image:
      "https://kegelmen.dgt-assets.com/kegelman-app/category/result-screen/user-3-ru.jpg",
    author: "Alexander A.",
    text: "I was skeptical at first, but Kegel Men helped me manage my erectile dysfunction. The app is easy to use, and the exercises keep me motivated.",
  },
];

export default comments;
