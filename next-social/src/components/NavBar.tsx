import Link from "next/link";
import MobileMenuBtn from "./MobileMenuBtn";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className="flex h-20 items-center justify-between ">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-primary-600">
          SocialMedia{" "}
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex w-[50%] text-sm ">
        <div className="flex gap-9 text-primary-700">
          {/* Nav Links */}
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/home.png"}
              width={16}
              height={10}
              alt="Homepage"
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/friends.png"}
              width={16}
              height={10}
              alt="Friends"
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/stories.png"}
              width={16}
              height={10}
              alt="Stories"
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="flex space-x-2 justify-center items-center h-5">
            <span className="sr-only">Loading...</span>
            <div className="h-2 w-2 bg-primary-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 bg-primary-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-primary-700 rounded-full animate-bounce"></div>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={"/people.png"} width={20} height={20} alt="" />
            </div>
            <div className="cursor-pointer">
              <Image src={"/messages.png"} width={20} height={20} alt="" />
            </div>
            <div className="cursor-pointer">
              <Image src={"/notifications.png"} width={20} height={20} alt="" />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src={"/login.png"} width={20} height={20} alt="" />
              <Link href={"/"}> Login/ Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenuBtn />
      </div>
    </div>
  );
};

export default NavBar;
