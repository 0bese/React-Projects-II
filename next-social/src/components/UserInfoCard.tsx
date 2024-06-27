import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-primary-100 rounded-lg text-sm text-primary-600 shadow-md">
      <div className="flex justify-between items-center font-medium">
        <span className="text-primary-500">User Information</span>
        <Link href={"/"} className="text-blue-400 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-primary-600">
        <div className="flex items-center gap-2">
          <span className="text-xl to-primary-700"> Kojo A. Obese</span>
          <span className="text-sm text-primary-500"> @Obese</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla
          enim voluptate 🚀
        </p>
        <div className="flex items-center gap-2">
          <Image src={"/map.png"} width={16} height={16} alt="" />
          <span>
            Living in <b>Toronto</b>{" "}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/school.png"} width={16} height={16} alt="" />
          <span>
            Went to <b>Seneca Polytechnic</b>{" "}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/work.png"} width={16} height={16} alt="" />
          <span>
            Works at <b>Pinterest</b>{" "}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src={"/link.png"} width={16} height={16} alt="" />
            <Link
              href={"https://www.github.com/0bese"}
              className="text-blue-400 font-medium"
              target="_blank"
            >
              github-Kojo
            </Link>
          </div>
          <div className=" flex gap-1 items-center">
            <Image src={"/date.png"} width={16} height={16} alt="" />
            <span className="">Joined June 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};
export default UserInfoCard;
