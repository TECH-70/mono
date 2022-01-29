import { ClockIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Sidebar() {
  const { data: session } = useSession();
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] fixed h-full">
      <div className="flex items-center justify-center w-20 h-20 xl:ml-24">
        <Image
          src="https://i.ibb.co/bWKZV3d/Screenshot-2022-01-24-180805.png"
          width={50}
          height={50}
          className="rounded-full border"
        />
      </div>
      <div className="text-[#d9d9d9] flex items-center justify-center mt-2 hoverAnimation xl:ml-auto xl:-mr-5">
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-6">
          <h4 className="font-bold text-[#929090]">Time you spent:&nbsp;</h4>
          <span> </span>
        </div>
        <div id="display" className="hidden xl:inline leading-6 text-white font-semibold">
          <span>{("0" + Math.floor((time/ 3600000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          <ClockIcon className="h-6 hidden xl:inline ml-3" />
        </div>
        <div id="functions">{!timerOn && time === 0 && setTimerOn(true)}</div>
      </div>
    </div>
  );
}

export default Sidebar;
