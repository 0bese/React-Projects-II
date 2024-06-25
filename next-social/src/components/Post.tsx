import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <span className="font-medium text-primary-600">Kojo Obese</span>
        </div>
        <Image src={"/more.png"} width={16} height={16} alt="" />
      </div>
      {/* DESCRIPTION */}
      <div className=" flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p className="text-primary-00">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit alias
          aspernatur debitis excepturi assumenda autem repellendus est, ea
          corrupti natus ad. Nostrum quod laborum voluptatum, minus ea suscipit
          explicabo at!
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-primary-200 p-2 rounded-xl">
            <Image
              src={"/like.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />{" "}
            <span className="text-primary-300">|</span>
            <span className="text-primary-800">
              123{" "}
              <span className="hidden md:inline text-primary-800">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-primary-200 p-2 rounded-xl">
            <Image
              src={"/comment.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />{" "}
            <span className="text-primary-300">|</span>
            <span className="text-primary-800">
              456{" "}
              <span className="hidden md:inline text-primary-800">
                Comments
              </span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-primary-200 p-2 rounded-xl">
            <Image
              src={"/share.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />{" "}
            <span className="text-primary-300">|</span>
            <span className="text-primary-800">
              345{" "}
              <span className="hidden md:inline text-primary-800">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
