import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "Compete on the Flowstate leaderboard. Sign in with an account, set a username, and see your rank percentile.",
};

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "#";

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
        Leaderboard
      </h1>
      <p className="mt-4 text-lg text-muted">
        See how you stack up. The Flowstate leaderboard is inside the app—this
        page is for anyone who wants to know what it is before downloading.
      </p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            What is the leaderboard?
          </h2>
          <p className="mt-2 text-muted">
            The leaderboard ranks users by their attention-test scores. When you
            create an account and set a public username, your scores count
            toward your rank. You can see your percentile (e.g. top 10%) and
            where you stand relative to others. It&apos;s optional: you can use
            Flowstate without an account and still get scores and trends; the
            daily limit and calibration work the same.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">
            How do I join?
          </h2>
          <p className="mt-2 text-muted">
            Download the app, create an account (email + password), and choose a
            public username. Your next scores will appear on the leaderboard and
            you&apos;ll see your rank. Usernames are visible to other users on the
            leaderboard; we don&apos;t show your email.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-foreground">
            Get the app to join the leaderboard
          </h2>
          <p className="mt-2 text-muted">
            The leaderboard lives inside Flowstate. Download the app to create an
            account and see your rank.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton href={APP_STORE_URL} external>
              Download on the App Store
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
