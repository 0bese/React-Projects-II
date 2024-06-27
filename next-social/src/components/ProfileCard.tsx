import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-primary-100 rounded-lg text-primary-600 text-sm shadow-md flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={
            "https://images.pexels.com/photos/26653748/pexels-photo-26653748/free-photo-of-the-milky-way-over-the-water-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          fill
          className="rounded-md object-cover"
          alt=""
        />
        <Image
          src={
            "https://images.pexels.com/photos/1661502/pexels-photo-1661502.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
          alt=""
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Akosua Obese</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={
                "https://images.pexels.com/photos/1534892/pexels-photo-1534892.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              width={12}
              height={12}
              className="rounded-full object-cover w-4 h-4  "
              alt=""
            />
            <Image
              src={
                "https://images.pexels.com/photos/9136298/pexels-photo-9136298.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              width={12}
              height={12}
              className="rounded-full object-cover w-4 h-4  "
              alt=""
            />
            <Image
              src={
                "https://images.pexels.com/photos/2791823/pexels-photo-2791823.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              width={12}
              height={12}
              className="rounded-full object-cover w-4 h-4  "
              alt=""
            />
          </div>
          <span className="text-xs">1032 Followers</span>
        </div>
        <Link
          href={"/profile/1"}
          className="bg-blue-500 text-white text-center text-xs p-2 rounded-md w-full"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
