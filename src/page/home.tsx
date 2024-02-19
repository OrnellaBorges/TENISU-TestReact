import React from "react";

type HomeProps = {
  children: React.ReactNode; //
};
export default function Home({ children }: HomeProps) {
  return <main>{children}</main>;
}
