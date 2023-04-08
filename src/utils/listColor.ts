export const listButtonColor = ["bg-red-500", "bg-green-500", "bg-purple-500", "bg-orange-500"];

export const randomBgColor = () => {
  return listButtonColor[Math.floor(Math.random() * 4)];
};
