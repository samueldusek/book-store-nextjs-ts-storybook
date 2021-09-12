import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form/contact-form";
import LayoutBasicPage from "../components/layout/layout-basic-page/layout-basic-page";

const Contact: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
      </Head>
      <LayoutBasicPage>
        <ContactForm />
      </LayoutBasicPage>
    </Fragment>
  );
};

export default Contact;
