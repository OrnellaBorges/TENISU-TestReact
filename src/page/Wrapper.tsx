import React from "react";
import "./wrapper.css";

type WrapperProps = {
  children: React.ReactNode;
  tag: React.ElementType;
};

export default function Wrapper({ children, tag }: WrapperProps) {
  const WrapperTag = tag;
  return <WrapperTag className="wrapper">{children}</WrapperTag>;
}
