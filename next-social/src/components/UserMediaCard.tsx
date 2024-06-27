import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-primary-100 rounded-lg text-sm text-primary-600 shadow-md">
      <div className="flex justify-between items-center font-medium">
        <span className="text-primary-500">User Media</span>
        <Link href={"/"} className="text-blue-400 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex  gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/5537543/pexels-photo-5537543.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/936090/pexels-photo-936090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/7171858/pexels-photo-7171858.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/7745573/pexels-photo-7745573.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            className="object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
