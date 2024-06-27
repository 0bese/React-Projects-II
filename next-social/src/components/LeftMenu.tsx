import ProfileCard from "./ProfileCard";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-primary-100 rounded-lg text-primary-600 text-sm shadow-md"></div>
    </div>
  );
};

export default LeftMenu;
