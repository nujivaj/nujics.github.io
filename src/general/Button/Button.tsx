import React from "react";
import "./Button.css";

export function Button({
  onClick,
  label,
  style,
  className,
  hoverColor = "white",
  backgroundColor = "#007bff",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`general-button ${className}`}
      style={
        {
          ...style,
          "--bg-color": backgroundColor,
          "--hover-color": hoverColor,
        } as React.CSSProperties
      }
      disabled={disabled}
    >
      {label}
    </button>
  );
}
