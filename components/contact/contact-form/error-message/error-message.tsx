import { ErrorMessage } from "@hookform/error-message";
import { useTheme } from "../../../../store/theme-context";
import useErrorMsgStyles from "./styles";
import { FieldErrors } from "react-hook-form";

export type ErrorMsgProps = {
  errors: FieldErrors;
  name: string;
};

const ErrorMsg = ({ errors, name }: ErrorMsgProps) => {
  const { theme } = useTheme();
  const classes = useErrorMsgStyles({ theme });
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className={classes.error}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </p>
      )}
    />
  );
};

export default ErrorMsg;
