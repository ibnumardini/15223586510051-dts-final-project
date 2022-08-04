import { notification } from "antd";

export const ToastSuccess = "success";
export const ToastError = "error";

export const Toast = (type, { title, desc = "" }) => {
  notification.config({
    placement: "bottomLeft",
    duration: 1,
  });
  notification[type]({
    message: title,
    description: desc,
  });
};
