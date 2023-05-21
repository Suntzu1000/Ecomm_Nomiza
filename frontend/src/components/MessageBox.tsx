import React from "react";
import Alert from "./Alert";

export default function MessageBox({
  children,
}: {
  variant?: string;
  children: React.ReactNode;
}) {
  return <Alert variant="info">{children}</Alert>;
}
