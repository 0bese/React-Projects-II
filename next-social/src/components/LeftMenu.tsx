import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Ad from "./Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-primary-100 rounded-lg text-primary-600 text-sm shadow-md flex flex-col gap-2">
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/posts.png"} width={20} height={20} alt="" />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/activity.png"} width={20} height={20} alt="" />
          <span>Activity</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/market.png"} width={20} height={20} alt="" />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/events.png"} width={20} height={20} alt="" />
          <span>Events</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/albums.png"} width={20} height={20} alt="" />
          <span>Albums</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/videos.png"} width={20} height={20} alt="" />
          <span>Videos</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/news.png"} width={20} height={20} alt="" />
          <span>News</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/courses.png"} width={20} height={20} alt="" />
          <span>Courses</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/lists.png"} width={20} height={20} alt="" />
          <span>Lists</span>
        </Link>
        <hr className="border-t-[1px] border-primary-200 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary-200"
        >
          <Image src={"/settings.png"} width={20} height={20} alt="" />
          <span>Settings</span>
        </Link>
      </div>

      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
