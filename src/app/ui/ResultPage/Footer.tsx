import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[456px] max-md:w-[300px] p-5 mt-[30px] items-center h-[500px] gap-[100px] justify-start flex flex-col">
      <p className="text-center  max-lg:w-[300px] text-[14px]">
        Любые вопросы или обратная связь: вы всегда можете связаться с нами по
        адресу{" "}
        <a href="mailto:info@kegelmen.app" className="text-blue-600">
          info@kegelmen.app
        </a>
        .
      </p>
      <div className="text-[10px] flex gap-5">
        <Link href="https://kegelman.app/terms-of-use">
          Условия использования
        </Link>
        <Link href="https://kegelman.app/privacy-policy">
          Политика конфиденциальности
        </Link>
        <Link href={"#"}>Политика возврата</Link>
      </div>
    </footer>
  );
}
