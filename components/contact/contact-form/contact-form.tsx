import useContactFormStyles from "./styles";

export type ContactFormProps = {};

const ContactForm = ({}: ContactFormProps) => {
  const classes = useContactFormStyles();
  return (
    <form className={classes.Form}>
      <div className={classes.contactControls}>
        <div className={classes.control}>
          <label>Your email</label>
          <input type="email" />
        </div>
        <div className={classes.control}>
          <label>Your name</label>
          <input type="text" />
        </div>
      </div>
      <div className={classes.message}>
        <label>Your message</label>
        <textarea rows={10}></textarea>
      </div>
    </form>
  );
};

export default ContactForm;
