export type ContactFormProps = {};

const ContactForm = ({}: ContactFormProps) => {
  return (
    <form>
      <label>Your email</label>
      <input type="email" />
      <label>Your name</label>
      <input type="text" />
      <label>Your message</label>
      <textarea></textarea>
    </form>
  );
};

export default ContactForm;
