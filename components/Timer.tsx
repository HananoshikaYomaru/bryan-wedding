import moment from "moment";
import { useState, useEffect } from "react";
import { useLocale } from "../lib/locale";

const Timer = () => {
  const { L } = useLocale();
  const [time, setTime] = useState(
    moment.duration(
      moment("2022-07-30T13:30:00", "YYYY-MM-DDTHH:mm:ss").diff(moment())
    )
  );

  useEffect(() => {
    let interval = setInterval(() => {
      // console.log("hello")
      // console.log(moment("2022-03-05T13:30:00" , "YYYY-MM-DDTHH:mm:ss").day())
      setTime(
        moment.duration(
          moment("2022-07-30T13:30:00", "YYYY-MM-DDTHH:mm:ss").diff(moment())
        )
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-row space-x-2 xs:space-x-5 sm:space-x-10 ">
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood">
          {time.asDays().toFixed()}
        </p>
        <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">
          {L().home.days}
        </p>
      </div>
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood">
          {time.hours()}
        </p>
        <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">
          {L().home.hours}
        </p>
      </div>
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood ">
          {time.minutes()}
        </p>
        <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">
          {L().home.minutes}
        </p>
      </div>
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood">
          {time.seconds()}
        </p>
        <p className="font-copperplate text-pickled-bluewood text-xs sm:text-base">
          {L().home.seconds}
        </p>
      </div>
    </div>
  );
};

export default Timer;
