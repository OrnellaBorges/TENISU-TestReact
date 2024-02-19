import React from "react";
import "./wrapper.css";

export default function Wrapper({ children }) {
  return <section className="wrapper">{children}</section>;
}
