import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* MIDDLE */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className=" w-full h-64 relative">
              <Image
                className="object-cover rounded-md"
                src={
                  "https://images.pexels.com/photos/3886347/pexels-photo-3886347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                fill
                alt=""
              />
              <Image
                className="w-32 h-32 rounded-full absolute object-cover left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                src={
                  "https://images.pexels.com/photos/7295005/pexels-photo-7295005.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                width={128}
                height={128}
                alt=""
              />
            </div>
            <h1 className="mt-20 mb-4 text-primary-700 text-2xl w-[50%] text-center font-medium">
              Akosua Kyirba Obese
            </h1>

            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium"> 122</span>
                <span className="text-xs"> Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium"> 1.5K</span>
                <span className="text-xs"> Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium"> 2K</span>
                <span className="text-xs"> Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default Profile;
