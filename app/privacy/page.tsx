import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Flowstate privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">
        Last updated: February 2025
      </p>

      <div className="prose prose-invert mt-10 max-w-none prose-p:text-muted prose-headings:text-foreground prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-hover">
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Overview
          </h2>
          <p className="text-muted">
            Flowstate (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a
            minimal attention-test app. This policy explains what information we
            collect, how we use it, and your choices. We don&apos;t use advertising
            SDKs or sell your personal data. We aim to be straightforward and
            transparent—consistent with a small indie app.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Information We Collect
          </h2>
          <p className="text-muted mb-4">
            We collect only what we need to run the app and provide scores,
            trends, and the leaderboard.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>
              <strong className="text-foreground">Account info.</strong> If you
              create an account: email address and a hashed password. You choose
              a public username for the leaderboard.
            </li>
            <li>
              <strong className="text-foreground">App usage and scores.</strong>{" "}
              Session data, timestamps, and test results (scores) so we can show
              your history, trends, and leaderboard rank. For logged-out users,
              we may store a limited amount of usage data (e.g. daily attempt
              count) on your device to enforce the daily limit.
            </li>
            <li>
              <strong className="text-foreground">Device and local
              settings.</strong> Preferences such as dark mode, sound, haptics,
              calibration baseline, and daily attempt count for logged-out users
              are stored only on your device (e.g. via local storage). We don&apos;t
              receive these unless you sign in and we sync only what&apos;s needed
              for your account.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            How We Use Information
          </h2>
          <p className="text-muted">
            We use your information to: provide and improve the app; authenticate
            your account; store and display your scores, trends, and leaderboard
            position; enforce the daily attempt limit; and communicate with you
            (e.g. support or important updates). We do not use your data for
            advertising or sell it to third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            How We Share Information
          </h2>
          <p className="text-muted mb-4">
            We share data only in these limited cases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>
              <strong className="text-foreground">Service providers.</strong> We
              use hosting and database providers (e.g. Supabase or similar) to
              run the app. They process data on our behalf under agreements that
              protect your information.
            </li>
            <li>
              <strong className="text-foreground">Legal requirements.</strong> We
              may disclose information if required by law, court order, or
              government request, or to protect our rights and safety.
            </li>
          </ul>
          <p className="text-muted mt-4">
            We do not sell or rent your personal information. Your public
            username and leaderboard scores are visible to other users as part of
            the leaderboard feature.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Data Retention
          </h2>
          <p className="text-muted">
            We keep your account and score data for as long as your account is
            active. If you delete your account or request deletion of your data,
            we will remove or anonymize your personal information in line with
            this policy and our systems. Some data may remain in backups for a
            limited period before being overwritten.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Your Choices & Rights
          </h2>
          <p className="text-muted mb-4">
            You can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted">
            <li>
              <strong className="text-foreground">Access and update your
              username</strong> in the app settings.
            </li>
            <li>
              <strong className="text-foreground">Delete your account or
              scores.</strong> You can request account or score deletion by
              contacting us at the support email below. We will process requests
              in line with our systems; in-app deletion may not be available for
              all data, but we will honor reasonable deletion requests.
            </li>
          </ul>
          <p className="text-muted mt-4">
            If you are in a region that grants additional rights (e.g. GDPR,
            CCPA), you may have the right to access, correct, restrict, or
            delete your data. Contact us at the email below to exercise those
            rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Security
          </h2>
          <p className="text-muted">
            We use industry-standard practices to protect your data, including
            encryption in transit and secure storage. Passwords are hashed. No
            system is completely secure; we will notify you if we become aware of
            a breach that affects your personal information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Children&apos;s Privacy
          </h2>
          <p className="text-muted">
            Flowstate is not directed at children under 13. We do not knowingly
            collect personal information from children under 13. If you believe
            we have collected such information, please contact us and we will
            delete it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            International Transfers
          </h2>
          <p className="text-muted">
            Your data may be processed in countries other than your own,
            including where our service providers operate. We ensure appropriate
            safeguards (e.g. standard contractual clauses or equivalent) where
            required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Changes to This Policy
          </h2>
          <p className="text-muted">
            We may update this policy from time to time. We will post the
            updated version here and update the &ldquo;Last updated&rdquo; date.
            Continued use of the app after changes means you accept the updated
            policy. For material changes, we may notify you in the app or by
            email where appropriate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
            Contact Us
          </h2>
          <p className="text-muted">
            For privacy questions, deletion requests, or other concerns, contact
            us at:{" "}
            <a
              href="mailto:paarth.rajpal@gmail.com"
              className="text-accent hover:text-accent-hover"
            >
              paarth.rajpal@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
