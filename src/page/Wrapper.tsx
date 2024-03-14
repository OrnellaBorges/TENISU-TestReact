import React from "react";
import "./wrapper.css";

export default function Wrapper({ children, type }) {
  const WrapperTag = type;
  return <WrapperTag className="wrapper">{children}</WrapperTag>;
}
