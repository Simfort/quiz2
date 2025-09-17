import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[456px] max-md:w-[300px] p-5 mt-[30px] items-center h-[500px] gap-[100px] justify-start flex flex-col">
      <p className="text-center  max-lg:w-[300px] text-[14px]">
        Any questions or feedback: You can always contact us at{" "}
        <a href="mailto:info@kegelmen.app" className="text-blue-600">
          support@kegelpower.pro
        </a>
        .
      </p>
      <div className="text-[10px] flex gap-5">
        <Link href="https://www.termsfeed.com/live/2b2a27ed-1a1c-4ada-b6b8-d5a6cdc246f3">
          Terms of use
        </Link>
        <Link href="https://www.termsfeed.com/live/c61a8a44-f66d-4669-ad9f-faee10d11010">
          Privacy policy
        </Link>
        <Link href={"#"}>Refund Policy</Link>
      </div>
    </footer>
  );
}
