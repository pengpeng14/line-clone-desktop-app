export const setLocalTimeZone = (time) => {
  // set time zone
  let tzoffset = new Date().getTimezoneOffset() * 60000;
  let localISOTime = new Date(new Date(time) - tzoffset)
    .toISOString()
    .slice(0, -1);
  // slice to only time
  let onlyTime = new Date(localISOTime).toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return onlyTime;
};
