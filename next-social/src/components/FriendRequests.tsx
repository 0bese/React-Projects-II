import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-primary-100 rounded-lg text-sm text-primary-600 shadow-md">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-primary-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-400 text-xs">
          See all
        </Link>
      </div>
      {/* USERS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            className="w-10 h-10 rounded-full object-cover"
            height={40}
            width={40}
            alt=""
          />
          <span className="font-semibold">Angelina Jolie</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            className="cursor-pointer"
            height={20}
            width={20}
            alt=""
          />
          <Image
            src={"/reject.png"}
            className="cursor-pointer"
            height={20}
            width={20}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            className="w-10 h-10 rounded-full object-cover"
            height={40}
            width={40}
            alt=""
          />
          <span className="font-semibold">Angelina Jolie</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            className="cursor-pointer"
            height={20}
            width={20}
            alt=""
          />
          <Image
            src={"/reject.png"}
            className="cursor-pointer"
            height={20}
            width={20}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            className="w-10 h-10 rounded-full object-cover"
            height={40}
            width={40}
            alt=""
          />
          <span className="font-semibold">Angelina Jolie</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            className="cursor-pointer"
            height={20}
            width={20}
            alt=""
          />
          <Image
            src={"/reject.png"}
            className="cursor-pointer"
            height={20}
            width={20}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
