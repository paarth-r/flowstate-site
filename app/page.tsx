import { CTAButton } from "@/components/CTAButton";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "#";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              2-minute attention test.
            </h1>
            <p className="mt-5 text-lg text-muted sm:text-xl">
              A minimal, fast test to understand and improve your ability to stay
              focused. Quick, repeatable, private by design.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={APP_STORE_URL} external>
                Download on the App Store
              </CTAButton>
              <CTAButton href="/leaderboard" variant="secondary">
                Join leaderboard
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-b border-border py-16 sm:py-24"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="how-it-works-heading"
            className="text-center text-2xl font-semibold text-foreground sm:text-3xl"
          >
            How it works
          </h2>
          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-card text-xl font-semibold text-foreground">
                1
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Enter Flowstate</h3>
              <p className="mt-2 text-sm text-muted">
                Open the app and start a session. A quick &ldquo;Ready?&rdquo;
                sequence gets you set.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-card text-xl font-semibold text-foreground">
                2
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Tap the X</h3>
              <p className="mt-2 text-sm text-muted">
                Complete the timed tapping task: tap the X as fast as you can.
                Reaction-time calibration personalizes the experience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-card text-xl font-semibold text-foreground">
                3
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Track & improve</h3>
              <p className="mt-2 text-sm text-muted">
                See your score, week/month trends, and—if you sign in—your
                leaderboard rank. Two attempts per day keep the test meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="border-b border-border py-16 sm:py-24"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="features-heading"
            className="text-center text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Features
          </h2>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Daily limit</h3>
              <p className="mt-2 text-sm text-muted">
                2 attempts per day with a lock overlay and midnight reset
                countdown. We limit attempts so each run stays meaningful and
                comparable.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Scores & trends</h3>
              <p className="mt-2 text-sm text-muted">
                View your results and week/month change charts to see how your
                focus evolves over time.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Leaderboard & rank</h3>
              <p className="mt-2 text-sm text-muted">
                Signed-in users get a public username and can see their
                leaderboard position and rank percentile.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Dark & light mode</h3>
              <p className="mt-2 text-sm text-muted">
                Use the app in the theme that fits you. Settings like theme,
                sound, and haptics stay on your device.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Accounts</h3>
              <p className="mt-2 text-sm text-muted">
                Optional email + password accounts and a public username for the
                leaderboard. No ads; we don&apos;t sell your data.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Subscription</h3>
              <p className="mt-2 text-sm text-muted">
                Coming soon. No checkout or payment required for current
                features.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Screenshots - placeholder images in /public */}
      <section
        className="border-b border-border py-16 sm:py-24"
        aria-labelledby="screenshots-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="screenshots-heading"
            className="text-center text-2xl font-semibold text-foreground sm:text-3xl"
          >
            See it in action
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ScreenshotPlaceholder key={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — beta users */}
      <section
        className="border-b border-border py-16 sm:py-24"
        aria-labelledby="social-proof-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="social-proof-heading"
            className="text-center text-2xl font-semibold text-foreground sm:text-3xl"
          >
            What beta users say
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <blockquote className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-foreground">
                &ldquo;After two weeks I could actually feel the difference—I
                catch myself staying on task longer. The daily limit makes it
                feel like a real check-in, not another app to grind.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — <cite className="not-italic font-medium text-foreground">Nishanth D.</cite>, beta user
              </footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-foreground">
                &ldquo;My attention was all over the place. Flowstate gave me a
                number I could track. Now I can tangibly see when I&apos;m slipping
                and when I&apos;m sharp.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — <cite className="not-italic font-medium text-foreground">Arin D.</cite>, beta user
              </footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-foreground">
                &ldquo;I didn&apos;t think two minutes could change anything. Within
                a month my scores improved and I honestly feel more present when
                I work. Simple and effective.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — <cite className="not-italic font-medium text-foreground">Rushil K.</cite>, beta user
              </footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-foreground">
                &ldquo;The trend chart made it click—I could see my attention
                improve week over week. It&apos;s not vague anymore; I have something
                to point to.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — <cite className="not-italic font-medium text-foreground">Sofia L.</cite>, beta user
              </footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-foreground">
                &ldquo;I could tangibly feel my focus get better. Meetings that
                used to drain me feel manageable now. The test is quick enough
                that I actually do it.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — <cite className="not-italic font-medium text-foreground">Alex N.</cite>, beta user
              </footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-foreground">
                &ldquo;My ability to stay focused improved in a way I could
                measure. No fluff—just a short test and real feedback. Exactly
                what I needed.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — <cite className="not-italic font-medium text-foreground">Jordan P.</cite>, beta user
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 sm:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            id="faq-heading"
            className="text-center text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Frequently asked questions
          </h2>
          <dl className="mt-12 space-y-8">
            <div>
              <dt className="font-semibold text-foreground">
                Why only 2 attempts per day?
              </dt>
              <dd className="mt-2 text-sm text-muted">
                We cap attempts so each run stays meaningful and comparable.
                The daily limit and midnight reset help you build a consistent
                habit without grinding. The lock overlay and countdown make the
                limit clear.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                What data does Flowstate store?
              </dt>
              <dd className="mt-2 text-sm text-muted">
                If you create an account: we store your email, a hashed password,
                and a public username. We also store your scores and session
                timestamps so we can show trends and leaderboard rank. Some
                settings (e.g. dark mode, sound, haptics, calibration baseline,
                daily attempt count for logged-out users) are stored only on your
                device. We don&apos;t use ad SDKs or sell your data.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                Is there a subscription?
              </dt>
              <dd className="mt-2 text-sm text-muted">
                Subscription is coming soon. Right now there&apos;s no checkout
                or payment; all current features are available without it.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                How do I get on the leaderboard?
              </dt>
              <dd className="mt-2 text-sm text-muted">
                Create an account in the app and set a public username. Your
                scores will count toward the leaderboard and you&apos;ll see your
                rank percentile. Check the Leaderboard page on this site for
                more info.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-surface/50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to test your focus?
          </h2>
          <p className="mt-3 text-muted">
            Download Flowstate and get your first score in under two minutes.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href={APP_STORE_URL} external>
              Download on the App Store
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
