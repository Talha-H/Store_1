import moment from "moment";

export const CalculateRemainingTime = (targetDate) => {
  const now = moment();
  const target = moment(targetDate);
  const duration = moment.duration(target.diff(now));

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  return { days, hours, minutes, seconds };
};
