import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* Write comment */}
      <div className="flex items-center gap-4">
        <Image
          className="w-8 h-8 rounded-full"
          src={
            "https://images.pexels.com/photos/748838/pexels-photo-748838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          height={32}
          width={32}
          alt=""
        />
        <div className="flex flex-1 items-center justify-between bg-primary-200 rounded-xl text-sm w-full py-2 px-6">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 bg-transparent outline-none text-primary-900 placeholder-primary-600"
          />
          <Image
            src={"/emoji.png"}
            width={16}
            height={16}
            className="cursor-pointer"
            alt=""
          />
        </div>
      </div>
      {/* Comments */}
      <div className="">
        {/* COMMENT  */}

        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            className="w-10 h-10 rounded-full"
            src={
              "https://images.pexels.com/photos/748838/pexels-photo-748838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            height={40}
            width={40}
            alt=""
          />
          {/* DESCRIPTION */}
          <div className=" flex flex-col gap-2 flex-1">
            <span className="font-medium text-primary-600">Kojo A. Obese</span>
            <p className="text-primary-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              obcaecati atque voluptas optio, officiis autem non dolorum eum
              sapiente in tempora dignissimos dolores ratione facere, vero
              consequuntur, sint alias distinctio.
            </p>
            <div className="flex items-center gap-8 text-xs text-primary-500">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  className="cursor-pointer w-4 h-4"
                  height={12}
                  width={12}
                  alt=""
                />
                <span className="text-primary-300">|</span>
                <span className="text-primary-800">
                  {" "}
                  345{" "}
                  <span className="hidden md:inline text-primary-800">
                    Likes
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src={"/more.png"}
            className="cursor-pointer w-4 h-4"
            height={16}
            width={16}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
