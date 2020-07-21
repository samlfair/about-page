import React from "react";
import HeroImage from "./../slices/HeroImage";
import ThreeStats from "./../slices/ThreeStats";
import TextAndImage from "./../slices/TextAndImage";

export default function Slice({ slice }) {
  switch (slice.slice_type) {
    case `hero_image`:
      return <HeroImage data={slice} />;
    case `text_and_image`:
      return <TextAndImage data={slice} />;
    case `three_stats`:
      return <ThreeStats data={slice} />;
  }
}
