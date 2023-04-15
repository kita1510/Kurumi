import moment from "moment";

export const formatDate = (date?: Date) => {
  return moment(date).format("LLL");
};

export const formatYear = (date?: Date) => {
  return moment(date).format("YYYY");
};
