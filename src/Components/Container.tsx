import React, { useState } from "react";
import infoData from "../data.json";
import Cards from "./Cards";
import avaterImg from "../images/image-jeremy.png";
type Props = {};

const Container = (props: Props) => {
  const [active, setActive] = useState("monthly");
  return (
    <section className=' space-y-6 lg:space-y-0 lg:gap-6 lg:flex lg:w-3/4 m-auto gap-4 h-[80%] max-h-[430px] lg:absolute w-full max-w-xl lg:max-w-4xl'>
      <div className='bg-DarkBlue h-48 flex-flex-col lg:h-full rounded-xl '>
        <div className='flex lg:flex-col lg:pt-4 lg:items-start items-center lg:w-full px-4 rounded-xl bg-Blue h-3/5 min-w-[200px] space-x-6 lg:space-x-0 lg:space-y-8'>
          <img
            className='w-16 object-fill border-white border-2 rounded-full'
            src={avaterImg}
            alt='avater'
          />
          <span className='lg:space-y-1'>
            <h1 className='text-paleBlue tracking-wide font-light'>
              Report for
            </h1>
            <h2 className='text-xl lg:text-3xl tracking-wider font-light text-white'>
              Jeremy Robson
            </h2>
          </span>
        </div>
        <div className='h-2/5 flex lg:flex-col lg:items-start lg:px-4 lg:justify-center lg:space-y-4 outline-none items-center justify-evenly text-desaturatedBlue'>
          <button
            onClick={() => setActive("daily")}
            className={`  outline-none ${
              active === "daily" ? "text-white" : "not"
            }`}>
            Daily
          </button>
          <button
            onClick={() => setActive("weekly")}
            className={` outline-none ${
              active === "weekly" ? "text-white" : "not"
            }`}>
            Weekly
          </button>
          <button
            onClick={() => setActive("monthly")}
            className={` outline-none ${
              active === "monthly" ? "text-white" : "not"
            }`}>
            Monthly
          </button>
        </div>
      </div>
      <div className='space-y-6 md:space-y-0 lg:w-full md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {infoData.map((info) => (
          <Cards
            active={active}
            key={info.title}
            name={info.title}
            daily={info.timeframes.daily}
            Weekly={info.timeframes.weekly}
            Monthly={info.timeframes.monthly}
          />
        ))}
      </div>
    </section>
  );
};

export default Container;
