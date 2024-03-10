import React from "react";
import "./main.css";

type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return <main className="main">{children}</main>;
}
