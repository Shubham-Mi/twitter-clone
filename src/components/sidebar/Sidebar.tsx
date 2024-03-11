import { GoHomeFill } from "react-icons/go";
import SidebarButton from "./Sidebar.types";
import { BsBell, BsBookmark, BsEnvelope, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import GoogleSignIn from "../GoogleSignIn";
import { FaXTwitter } from "react-icons/fa6";

const sidebarMenuItems: SidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <BsSearch />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="text-3xl hover:bg-background-hover h-fit rounded-full p-3 cursor-pointer w-fit transition-all">
          <FaXTwitter />
        </div>
        <div className="mt-4 text-xl pr-10">
          <ul>
            {sidebarMenuItems.map((item, key) => {
              return (
                <li
                  key={key}
                  className="flex justify-start gap-4 my-1 pl-3 pr-7 py-3 hover:bg-background-hover w-fit rounded-full transition-all cursor-pointer"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
          <button className="bg-primary-color hover:bg-primary-color-hover rounded-full mt-4 p-4 w-full font-bold transition-all">
            Post
          </button>
        </div>
      </div>
      <GoogleSignIn />
    </div>
  );
}

export default Sidebar;
