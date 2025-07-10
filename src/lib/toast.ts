import { toast, ToastOptions } from "react-toastify";
import React from "react";
import { Check, AlertCircle, Info } from "lucide-react";

const toastConfig: ToastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  className: "rounded-md text-base",
  // Removed boxShadow because it's not a ToastOptions prop
  // Add custom CSS in your stylesheet instead for boxShadow override
};

type ShowToastFunction = (message: string) => void;

export const showToast: {
  success: ShowToastFunction;
  info: ShowToastFunction;
  error: ShowToastFunction;
} = {
  success: (message: string) => {
    toast.success(message, {
      ...toastConfig,
      icon: React.createElement(Check, {
        size: 24,
        color: "#22c55e", // green for success
      }),
    });
  },
  info: (message: string) => {
    toast.info(message, {
      ...toastConfig,
      icon: React.createElement(Info, {
        size: 24,
        color: "#0ea5e9", // blue for info
      }),
    });
  },
  error: (message: string) => {
    toast.error(message, {
      ...toastConfig,
      icon: React.createElement(AlertCircle, {
        size: 24,
        color: "#ef4444", // red for error
      }),
    });
  },
};
