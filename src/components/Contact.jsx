import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Message sent successfully!");

    console.log({
      name,
      email,
      message,
    });

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="contact">

      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;