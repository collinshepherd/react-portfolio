import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "../styles/ContactPage.scss";

export default function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7abany",
        "template_fewtc1p",
        refForm.current,
        "Z7m-lvwKzHOd_OrZG"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="container-fluid mt-3 home-page">
      <div className="row">
        <div className="col">
          <h1 className=" home-title p-5">Contact Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Subject" type="text" required />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value={"Send"} />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
