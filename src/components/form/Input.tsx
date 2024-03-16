import { useState } from "react";
import "./input.css";

type InputProps = {
  setStateProps: (value: string) => void;
};

export default function Input({ setStateProps }: InputProps) {
  return (
    <input
      className="inputField"
      type="text"
      placeholder="search a player"
      onChange={(e) => setStateProps(e.target.value)}
    />
  );
}
