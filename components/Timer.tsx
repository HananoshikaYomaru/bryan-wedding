import { useTranslation } from "next-i18next";
import useTimer from "../hooks/useTimer";

const Timer = () => {
  const time = useTimer();
  const { t } = useTranslation("timer");

  return (
    <div className="flex flex-row space-x-2 xs:space-x-5 sm:space-x-10 ">
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood">
          {time.asDays().toFixed()}
        </p>
        <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">
          {t("days")}
        </p>
      </div>
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood">
          {time.hours()}
        </p>
        <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">
          {t("hours")}
        </p>
      </div>
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood ">
          {time.minutes()}
        </p>
        <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">
          {t("minutes")}
        </p>
      </div>
      <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
        <p className="font-wenyue text-2xl text-pickled-bluewood">
          {time.seconds()}
        </p>
        <p className="font-copperplate text-pickled-bluewood text-xs sm:text-base">
          {t("seconds")}
        </p>
      </div>
    </div>
  );
};

export default Timer;
