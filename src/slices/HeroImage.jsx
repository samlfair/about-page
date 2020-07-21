import React from "react";

export default function HeroImage({ data }) {
  console.log(data);

  return (
    <img
      className="hero-image"
      src={data.primary.hero_image.url}
      alt={data.primary.hero_image.alt}
      width={"1000"}
      height={"400"}
    />
  );
}
