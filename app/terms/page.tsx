import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Flowstate terms of service.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-semibold text-foreground">
        Terms of Service
      </h1>
      <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-muted">Coming soon.</p>
      </div>
    </div>
  );
}
