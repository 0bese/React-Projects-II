import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-primary-100 rounded-lg flex gap-4 justify-between text-sm text-primary-600 shadow-md">
      {/* AVATAR */}
      <div className="">
        <Image
          src={
            "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          className="w-12 h-12 object-cover rounded-full"
          alt=""
          width={50}
          height={50}
        />
      </div>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            className="text-primary-900 placeholder-primary-700 bg-primary-200 rounded-lg flex-1 p-2"
            placeholder="What's on your mind?"
          ></textarea>
          <Image
            src={"/emoji.png"}
            className="w-5 h-5 cursor-pointer self-end"
            alt=""
            width={20}
            height={20}
          />
        </div>
        {/* OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-primary-900 flex-1">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addImage.png"} alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addVideo.png"} alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addevent.png"} alt="" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/poll.png"} alt="" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
