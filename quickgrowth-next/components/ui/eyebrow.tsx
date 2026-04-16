import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#a5b4fc]",
        className,
      )}
    >
      {children}
    </span>
  );
}
