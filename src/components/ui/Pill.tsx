import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "red" | "white" | "black" | "outline";
  children: ReactNode;
  className?: string;
};

export default function Pill({ href, variant = "red", children, className = "" }: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`pill pill-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
