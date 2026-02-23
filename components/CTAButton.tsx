import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-[120ms] ease-out focus:outline-none focus:ring-2 focus:ring-[#FAF9F6] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:pointer-events-none";

  const primary =
    "bg-button-primary-bg text-button-primary-text hover:bg-accent-hover hover:text-[#0A0A0A]";
  const secondary =
    "border border-button-secondary-border bg-transparent text-foreground hover:bg-button-secondary-hover hover:border-[#606060]";

  const styles = variant === "primary" ? primary : secondary;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
