import moment from "moment";

export const PublishDate = (date) => {
  return moment(date).format("DD MMMM YYYY HH:mm");
};
