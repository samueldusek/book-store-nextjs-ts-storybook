import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import useContactFormStyles from "./styles";

type ContactFormInputs = {
  email: string;
  name: string;
  message: string;
};

export type ContactFormProps = {};

const ContactForm = ({}: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const classes = useContactFormStyles();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.contactControls}>
        <div className={classes.control}>
          <label>Your email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please, insert your email.",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please, enter email in valid format.",
              },
              maxLength: {
                value: 80,
                message:
                  "Maximum of 80 characters is allowed for the email input.",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
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
        </div>
        <div className={classes.control}>
          <label>Your name</label>
          <input
            type="text"
            {...register("name", {
              required: "Please, insert your name.",
              maxLength: {
                value: 80,
                message:
                  "Maximum of 80 characters is allowed for the name input.",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
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
        </div>
      </div>
      <div className={classes.message}>
        <label>Your message</label>
        <textarea
          rows={10}
          {...register("message", { required: "Please, insert your message." })}
        ></textarea>
        <ErrorMessage
          errors={errors}
          name="message"
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
      </div>
      <button type="submit">
        <span>Send message</span>
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
