interface ShapeProps {
  shape?: "primary" | "secondary";
  className?: string;
}

export default function ShapeDecoration({
  shape = "primary",
  className = "",
}: ShapeProps) {
  return (
    <div
      className={`absolute rounded-full blur-3xl filter opacity-40 animate-pulse-slow pointer-events-none select-none ${
        shape === "primary" ? "blob-primary" : "blob-secondary"
      } ${className}`}
      aria-hidden="true"
    />
  );
}
