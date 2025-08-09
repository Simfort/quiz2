import Image from "next/image";
import posts from "../../../../public/posts.png";
import crown from "../../../../public/svg/crown.svg";

export default function CallLive() {
  return (
    <section className="flex gap-2 flex-col">
      <h3 className="text-[20px] font-bold  ">
        Советы и вызовы в сексуальной жизни
      </h3>
      <Image src={posts} alt="posts" />
      <ul className="flex p-[30px] flex-col gap-5">
        <p className="flex gap-2 items-start">
          <Image src={crown} width={23} alt="crown" />
          Некоторые вредные привычки негативно влияют на сексуальное желание и
          производительность. Увеличьте пользу от упражнений Кегеля с помощью
          задач Kegel Men.
        </p>
        <p className="flex gap-2 items-start">
          <Image src={crown} width={23} alt="crown" />С помощью советов,
          основанных на научных исследованиях, вы можете улучшить свои
          показатели, лучше узнать своего партнера и оживить свою сексуальную
          жизнь.
        </p>
      </ul>
    </section>
  );
}
