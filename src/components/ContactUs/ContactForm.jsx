import React, { useState , useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactUsForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_2f4fgpc";
    const templateId = "template_9eyxt3n";
    const publicKey = "Yjs_nJCazcZoLQ6KA";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Somnath",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Email sent successfully");
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("An error has occurred");
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} ref={form} className="emailForm flex flex-col gap-7">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-lg text-center text-white bg-gray-800 border-2 border-gray-600
            px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg text-center text-white bg-gray-800 border-2 border-gray-600
            px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
      />
      <textarea
        cols="30"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-lg text-center text-white bg-gray-800 border-2 border-gray-600
            px-4 py-2 focus:outline-none focus:border-blue-500 w-full resize-none"
        placeholder="Your Message"
      ></textarea>
      <button
        type="submit"
        className={`w-full rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
