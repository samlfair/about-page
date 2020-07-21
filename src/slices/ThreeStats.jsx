import React from "react";
import { RichText } from "prismic-reactjs";
import Stat from "./../components/Stat";

export default function ThreeStats({ data }) {
  return (
    <div className="stats">
      {RichText.render(data.primary.description)}
      <div className="stat-boxes">
        {data.items.map((item, index) =>
          index < 3 ? <Stat data={item} /> : null
        )}
      </div>
    </div>
  );
}
