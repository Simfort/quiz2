"use client";
import kegel from "../../public/Kegel Power v5.png";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="fixed  flex items-center justify-center top-0 right-0 left-0 w-1/1 h-screen bottom-0">
      <div className="flex flex-col gap-5 items-center justify-center">
        <Image width={80} src={kegel} alt="logo" />
        <p className="text-2xl">Kegel Power</p>
        <div className="h-[50px] w-[50px]  border-2 border-red-500 rounded-full border-t-white animate-spin"></div>
      </div>
    </main>
  );
}
