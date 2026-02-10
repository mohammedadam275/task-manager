// Import the ContactForm component
import ContactForm from "../components/ContactForm"; // adjust path if needed

export default function ContactPage() {
  return (
    <div>
      {/* Page title */}
      <h1 className="section-title">Get in Touch</h1>

      {/* Render the actual contact form */}
      <ContactForm />
    </div>
  );
}
