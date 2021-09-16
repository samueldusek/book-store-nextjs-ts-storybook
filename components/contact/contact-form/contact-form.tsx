import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useTheme } from "../../../store/theme-context";
import ErrorMsg from "./error-message/error-message";

import useContactFormStyles from "./styles";

type ContactFormInputs = {
  email: string;
  name: string;
  message: string;
};

export type ContactFormProps = {};

const ContactForm = ({}: ContactFormProps) => {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const classes = useContactFormStyles({ theme });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <section className={classes.contactWrapper}>
      <h1>Contact us!</h1>
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
            <ErrorMsg errors={errors} name="email" />
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
            <ErrorMsg errors={errors} name="name" />
          </div>
        </div>
        <div className={classes.message}>
          <label>Your message</label>
          <textarea
            rows={10}
            {...register("message", {
              required: "Please, insert your message.",
            })}
          ></textarea>
          <ErrorMsg errors={errors} name="message" />
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
    </section>
  );
};

export default ContactForm;
