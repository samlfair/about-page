import React from "react";
import { RichText } from "prismic-reactjs";

export default function TextAndImage({ data }) {
  return (
    <div className="text-and-image">
      <div className="text">{RichText.render(data.primary.text)}</div>
      <div
        className="image"
        style={{ backgroundImage: `url(${data.primary.image.url})` }}
      ></div>
    </div>
  );
}
