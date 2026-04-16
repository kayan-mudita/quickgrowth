import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-6 py-20 sm:py-24 md:py-28",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      {eyebrow ? <div>{eyebrow}</div> : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "text-base text-white/70 sm:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
