import Image from "next/image";
import posts from "@public/posts.png";
import crown from "@public/svg/crown.svg";

export default function CallLive() {
  return (
    <section className="flex gap-2 flex-col">
      <h3 className="text-[20px] font-bold  ">
        Tips and challenges in sex life
      </h3>
      <Image src={posts} alt="posts" />
      <ul className="flex p-[30px] flex-col gap-5">
        <p className="flex gap-2 items-start">
          <Image src={crown} width={23} alt="crown" />
          Some bad habits negatively affect sexual desire and performance.
          Increase the benefits of Kegel exercises with Kegel Men tasks.
        </p>
        <p className="flex gap-2 items-start">
          <Image src={crown} width={23} alt="crown" />
          With the help of scientifically-based tips, you can improve your
          performance, get to know your partner better, and spice up your sex
          life.
        </p>
      </ul>
    </section>
  );
}
