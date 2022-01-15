import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {DotsHorizontalIcon} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 p-0 xl:ml-24">
        <h1 className="text-white text-2xl">M</h1>
      </div>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-5 hoverAnimation xl:ml-auto xl:-mr-5"
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-6">
        <p className="text-[#6e767d]">Time you've spent:</p>
          <h4 className="font-bold">{session.user.name}</h4>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10 text-transparent" />
      </div>
    </div>
  );
}

export default Sidebar;
