import { useTranslation } from "next-i18next";
import useTimer from "../hooks/useTimer";

const Timer = () => {
  const time = useTimer();
  const { t } = useTranslation("timer");

  return (
    <div
      id="timer"
      className="flex flex-row space-x-2 xs:space-x-5 sm:space-x-10 "
      data-aos="fade-up"
    >
      <div>
        <p>{time.asDays().toFixed()}</p>
        <p>{t("days")}</p>
      </div>
      <div>
        <p>{time.hours()}</p>
        <p>{t("hours")}</p>
      </div>
      <div>
        <p>{time.minutes()}</p>
        <p>{t("minutes")}</p>
      </div>
      <div>
        <p>{time.seconds()}</p>
        <p>{t("seconds")}</p>
      </div>
    </div>
  );
};

export default Timer;
