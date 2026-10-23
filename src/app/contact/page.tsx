import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="page-main">
      <div className="container">
        <section className="panel">
          <div className="eyebrow">Let's talk</div>
          <h1 className="page-title">Contact Alok Studio</h1>
          <p>
            Tell us about your event or photography needs. We will connect this page
            to a secure form that saves inquiries to Google Sheets and sends an email.
          </p>
          <div className="notice">
            Contact submission is not active yet. The form, server validation,
            Turnstile verification, Google Sheets integration, and email delivery
            will be implemented in a later step.
          </div>
          <p><Link href="/">← Back to home</Link></p>
        </section>
      </div>
    </main>
  );
}
