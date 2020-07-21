import React from "react";

export default function HeroImage({ data }) {
  return (
    <img
      className="hero-image"
      src={data.primary.hero_image.url}
      alt={data.primary.hero_image.alt}
      width={data.primary.hero_image.dimensions.width}
      height={data.primary.hero_image.dimensions.height}
    />
  );
}
