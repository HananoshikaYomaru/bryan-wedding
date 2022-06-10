import { useState, useEffect } from "react";
import moment from "moment";

const useTimer = () => {
  const wedding_datetime = moment("2022-07-30T13:30:00", "YYYY-MM-DDTHH:mm:ss");
  const [time, setTime] = useState(
    moment.duration(wedding_datetime.diff(moment()))
  );
  const [reach, setReach] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(moment.duration(wedding_datetime.diff(moment())));
      setReach(moment().isAfter(wedding_datetime));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return { time, reach };
};

export default useTimer;
