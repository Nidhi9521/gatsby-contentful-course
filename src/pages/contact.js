import React from "react";
import { Layout } from "components";

const Contact = () => {
  console.log("contact page");
  return (
    <Layout>
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/mqkjbjyl" method="POST">
        <div>
          <label>
            <span>Your email</span>
            <input type="email" required name="email"></input>
          </label>
          <br />
          <label>
            <span>Your message</span>
            <textarea required name="message" />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
};
export default Contact;
