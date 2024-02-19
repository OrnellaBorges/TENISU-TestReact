import React from "react";
import "./home.css";
type HomeProps = {
  children: React.ReactNode; //
};
export default function Home({ children }: HomeProps) {
  return <main className="main">{children}</main>;
}
