import Image from "next/image";

const Ad = ({ size }: { size?: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-primary-100 rounded-lg text-sm text-primary-600 shadow-md">
      {/* TOP */}
      <div className="flex items-center justify-between text-primary-600 font-medium">
        <span>Sponsored Ads</span>
        <Image src={"/more.png"} className="" height={16} width={16} alt="" />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            className="rounded-lg object-cover"
            src={
              "https://images.pexels.com/photos/2290786/pexels-photo-2290786.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full w-6 h-6 object-cover"
            src={
              "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            height={24}
            width={24}
            alt=""
          />
          <span className="text-primary-600 font-medium">Homechow Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita, aspernatur quas unde."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita, aspernatur quas unde, ipsum modi remreprehenderit repellendus magnam animi voluptate cupiditate repudiandae, dolorum delectus tempore vitae distinctio. Repellendus, nobis."}
        </p>
        <button className="bg-primary-200 text-primary-600 p-2 text-xs rounded-lg">
          {" "}
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
