import { GoHomeFill } from "react-icons/go";
import SidebarButton from "./Sidebar.types";
import { BsBell, BsBookmark, BsEnvelope, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import GoogleSignIn from "../SignIn";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useCurrentUser } from "../../../hooks/user";
import { useMemo } from "react";

function Sidebar() {
  const { user } = useCurrentUser();

  const sidebarMenuItems: SidebarButton[] = useMemo(
    () => [
      {
        title: "Home",
        icon: <GoHomeFill />,
        link: "/home",
      },
      {
        title: "Explore",
        icon: <BsSearch />,
        link: "/home",
      },
      {
        title: "Notifications",
        icon: <BsBell />,
        link: "/home",
      },
      {
        title: "Messages",
        icon: <BsEnvelope />,
        link: "/home",
      },
      {
        title: "Bookmarks",
        icon: <BsBookmark />,
        link: "/home",
      },
      {
        title: "Profile",
        icon: <BiUser />,
        link: `/${user?.id}`,
      },
    ],
    [user?.id]
  );

  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <div className="text-3xl hover:bg-background-hover h-fit rounded-full py-3 sm:px-3 cursor-pointer w-fit transition-all">
          <Link href={`/home`}>
            <FaXTwitter />
          </Link>
        </div>
        <div className="mt-4 text-xl pr-10">
          <ul>
            {sidebarMenuItems.map((item, key) => {
              return (
                <li key={key}>
                  <Link
                    className="flex justify-start gap-4 my-1 pl-3 pr-7 py-3 hover:bg-background-hover w-fit rounded-full transition-all cursor-pointer"
                    href={item.link}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden sm:inline">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="hidden sm:block bg-primary-color hover:bg-primary-color-hover rounded-full mt-4 p-4 sm:w-full font-bold transition-all">
            Post
          </button>
          <button className="block sm:hidden bg-primary-color hover:bg-primary-color-hover rounded-full mt-4 p-4 sm:w-full font-bold transition-all">
            <FaXTwitter />
          </button>
        </div>
      </div>
      <GoogleSignIn />
    </div>
  );
}

export default Sidebar;
