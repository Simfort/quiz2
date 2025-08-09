import Link from "next/link";

export default function Continue({
  path,
  searchParams,
}: {
  path: string;
  searchParams: string;
}) {
  return (
    <button className="] bottom-0 left-0 right-0  flex items-center justify-center">
      <Link
        href={path + "?" + searchParams}
        className="text-[18px] bg-[#d1252b] fixed top-[90%] w-[526px] flex items-center justify-center max-lg:w-[300px] h-[64px] p-[12px] font-bold rounded-[1rem]">
        Continue
      </Link>
    </button>
  );
}
