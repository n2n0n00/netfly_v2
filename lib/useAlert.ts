import { useState } from "react";

export interface Alert {
  show?: boolean;
  text?: string;
  type?: string;
}

const useAlert = ({ show, text, type }: Alert = {}) => {
  const [alert, setAlert] = useState<Alert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({
    text,
    type = "danger",
  }: {
    text?: string;
    type?: string;
    show?: boolean;
  } = {}) => setAlert({ show: true, text, type });

  const hideAlert = ({ show, type, text }: Alert = {}) =>
    setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
