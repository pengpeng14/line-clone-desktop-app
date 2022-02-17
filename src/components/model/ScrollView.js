export const scrollToBottom = (dummy) => {
  // console.log("test auto scroll when useeffect");
  // console.log(dummy);
  dummy.current.scrollIntoView({
    behavior: "smooth",
  });
};
