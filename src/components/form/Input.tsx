import { useState } from "react";
import "./input.css";

export default function Input({ setStateProps }) {
  return (
    <input
      className="inputField"
      type="text"
      placeholder="search a player"
      onChange={(e) => setStateProps(e.target.value)}
    />
  );
}
