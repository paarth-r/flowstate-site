import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground no-underline hover:text-accent-hover"
            >
              <Image
                src="/logo.png"
                alt=""
                width={24}
                height={24}
                className="rounded-lg"
              />
              <span className="wordmark">flowstate</span>
            </Link>
            <p className="mt-2 text-sm text-muted">
              A minimal 2-minute attention test. Quick, repeatable, private by design.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6 text-sm"
            aria-label="Footer navigation"
          >
            <Link
              href="/privacy"
              className="text-muted no-underline transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted no-underline transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="text-muted no-underline transition-colors hover:text-foreground"
            >
              Support
            </Link>
            <Link
              href="/leaderboard"
              className="text-muted no-underline transition-colors hover:text-foreground"
            >
              Leaderboard
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {currentYear} Flowstate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
