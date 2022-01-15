import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function Widgets() {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] space-y-5">
      <div className="text-[#d9d9d9] ml-15 fixed space-y-3 bg-[#1a1a1a] flex w-11/12 xl:w-9/12">
        
        <img
          src={session.user.image}
          alt=""
          className="h-9 w-9 mt-3 rounded-full sticky xl:mr-2.5"
        />
        <div className="ml-1 mt-10 h-10 xl:inline leading-3">
          <h4 className="font-bold mt-3">{session.user.name}</h4>
        </div>
      </div>
      <hr className="border-[#1a1a1a]"></hr>
      <hr className="border-[#1a1a1a]"></hr>
      <hr className="border-[#1a1a1a]"></hr>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;