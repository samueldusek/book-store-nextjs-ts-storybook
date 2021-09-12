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
          <ErrorMessage errors={errors} name="email" />
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
          <ErrorMessage errors={errors} name="name" />
        </div>
      </div>
      <div className={classes.message}>
        <label>Your message</label>
        <textarea
          rows={10}
          {...register("message", { required: "Please, insert your message." })}
        ></textarea>
        <ErrorMessage errors={errors} name="message" />
      </div>
      <button type="submit">Send message</button>
    </form>
  );
};

export default ContactForm;
