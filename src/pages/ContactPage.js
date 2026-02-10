import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.comments
    ) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("Contact Form Submitted:", formData);

    setSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comments: ""
    });
  };

  return (
    <div className="contact-page">
      <h2 className="section-title">Contact Us</h2>

      {submitted && (
        <p className="success-message">Thanks! Your message has been sent ✅</p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
