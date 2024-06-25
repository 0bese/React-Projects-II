import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-primary-100 rounded-lg text-sm text-primary-600 shadow-md">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-primary-500">Birthdays</span>
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
          <span className="font-semibold">Mohammed Kudus</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-xl">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-primary-50 rounded-lg flex items-center gap-4">
        <Image src={"/gift.png"} height={24} width={24} alt="" />
        <Link href={"/"} className=" flex flex-col gap-1 text-xs">
          <span className="text-primary-600 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-primary-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
