import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Flowstate. Contact us and find answers to common questions.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
        Support
      </h1>
      <p className="mt-4 text-muted">
        We&apos;re here to help. Reach out or check the FAQ below.
      </p>

      <section className="mt-10" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl font-semibold text-foreground">
          Contact
        </h2>
        <p className="mt-3 text-muted">
          Email us at:{" "}
          <a
            href="mailto:paarth.rajpal@gmail.com"
            className="text-accent hover:text-accent-hover underline"
          >
            paarth.rajpal@gmail.com
          </a>
        </p>
        <p className="mt-2 text-sm text-muted">
          We aim to respond within a few business days. For account deletion or
          privacy requests, see our{" "}
          <Link href="/privacy" className="text-accent hover:text-accent-hover underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-semibold text-foreground">
          FAQ
        </h2>
        <p className="mt-3 text-muted">
          Common questions are answered on the main page.{" "}
          <Link
            href="/#faq-heading"
            className="text-accent hover:text-accent-hover underline"
          >
            Jump to FAQ
          </Link>
        </p>
      </section>
    </div>
  );
}
