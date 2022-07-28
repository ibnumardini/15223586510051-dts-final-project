import { notification } from "antd";

export const ToastSuccess = "success";
export const ToastError = "error";

export const Toast = (type, { title, desc = "" }) => {
  notification[type]({
    message: title,
    description: desc,
  });
};
