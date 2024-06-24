"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-primary-700 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-primary-700 rounded-sm ease-in-out duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-primary-700 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "-rotate-45" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className=" absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-primary-100 flex flex-col items-center justify-center gap-8 font-medium text-xl z-10 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Groups</Link>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenuBtn;
