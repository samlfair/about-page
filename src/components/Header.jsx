import React from "react";
import { RichText } from "prismic-reactjs";

export default function Header({ title, subheading }) {
  return (
    <div className="header">
      {RichText.render(title)}
      {RichText.render(subheading)}
    </div>
  );
}
