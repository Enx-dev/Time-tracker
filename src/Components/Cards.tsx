import React, { useEffect, useState } from "react";
import dotIcon from "../images/icon-ellipsis.svg";
type timeframes = {
  current: number;
  previous: number;
};

type Props = {
  name: string;
  daily: timeframes;
  Weekly: timeframes;
  Monthly: timeframes;
  active: string;
};

const Cards = ({ name, daily, Monthly, Weekly, active }: Props) => {
  const [bgColor, setBgColor] = useState<string>();
  useEffect(() => {
    switch (name) {
      case "Work":
        setBgColor("bg-Work");
        break;
      case "Play":
        setBgColor("bg-Play");
        break;
      case "Study":
        setBgColor("bg-Study");
        break;
      case "Exercise":
        setBgColor("bg-Exercise");
        break;
      case "Social":
        setBgColor("bg-Social");
        break;
      case "Self Care":
        setBgColor("bg-SelfCare");
        break;
      default:
        break;
    }
  }, [name]);
  return (
    <div
      className={`${bgColor}  bg-no-repeat h-40 lg:h-full w-full  relative rounded-2xl`}>
      <div className='h-3/4 lg:h-4/5 px-4 flex flex-col lg:pt-6 lg:px-6 items-center pt-6 space-y-2 bg-DarkBlue absolute w-full bottom-0 rounded-2xl'>
        <div className='flex justify-between lg:mb-3 items-center w-full'>
          <p className='text-headers font-medium text-white tracking-wider'>
            {name}
          </p>
          <img src={dotIcon} alt='show more' />
        </div>

        <div className='flex items-center lg:flex-col lg:items-start lg:space-y-2 justify-between w-full'>
          <p className='text-4xl  tracking-wider font-light text-white '>
            {active === "daily"
              ? daily.current
              : active === "weekly"
              ? Weekly.current
              : Monthly.current}
            hrs
          </p>
          <p className='text-paleBlue text-[15px]  font-light'>
            {" "}
            {active === "daily"
              ? "Yesterday"
              : active === "weekly"
              ? "Last Week"
              : "Last Month"}{" "}
            -{" "}
            {active === "daily"
              ? daily.previous
              : active === "weekly"
              ? Weekly.previous
              : Monthly.previous}
            hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
