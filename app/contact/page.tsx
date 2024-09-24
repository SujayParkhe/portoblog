import ContactForm from "@/components/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div className="my-16">
      <h1 className="text-2xl font-bold">
        Thanks for taking the time to reach out. Please drop a message for any
        queries.
      </h1>
      <ContactForm />
      <ToastContainer />
    </div>
  );
};

export default Contact;
