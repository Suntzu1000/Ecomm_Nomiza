import React from "react";
import Alert from "./Alert";

export default function MessageBox({
  children,
}: {
  variant?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <Alert className="leading-relaxed" variant="info">{children}</Alert>;
}
