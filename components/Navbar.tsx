"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground no-underline transition-colors hover:text-accent-hover focus-ring rounded px-2 py-1"
        >
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="wordmark">flowstate</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/leaderboard"
            className="text-sm text-muted no-underline transition-colors hover:text-foreground focus-ring rounded px-2 py-1"
          >
            Leaderboard
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted no-underline transition-colors hover:text-foreground focus-ring rounded px-2 py-1"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-sm text-muted no-underline transition-colors hover:text-foreground focus-ring rounded px-2 py-1"
          >
            Support
          </Link>
        </div>
      </nav>
    </header>
  );
}
