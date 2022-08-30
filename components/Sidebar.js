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
      <div className="flex items-center justify-center w-20 h-20 xl:ml-[100px]">
        <Image
          src="https://i.ibb.co/gwtYFmm/Monotone-LOGO.png"
          width={50}
          height={50}
          className="rounded-full border"
        />
      </div>
      <div className="xl:bg-[#212121] xl:ml-auto pb-2 rounded-sm">
      <div className="text-[#fff] flex items-center justify-center mt-2 xl:ml-4 xl:mr-4">
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 mb-2 rounded-full xl:mr-2.5"
        />
        <h4 className="hidden mb-2 xl:inline leading-6">{session.user.name}</h4>
      </div>
      <div className="text-center xl:bg-[#323232] p-3 ml-3 mr-3 mb-1 rounded-sm">
        <div id="display" className="hidden xl:inline leading-6 text-[#d9d9d9] text-xl mb-2 font-semibold">
          <span>{("0" + Math.floor((time/ 3600000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
        <div id="functions">{!timerOn && time === 0 && setTimerOn(true)}</div>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
