import React from "react";
import { RichText } from "prismic-reactjs";
import Stat from "./../components/Stat";

export default function ThreeStats({ data }) {
  return (
    <div className="stats">
      {RichText.render(data.primary.description)}
      <div className="stat-boxes">
        {data.items.map((item, index) => {
          if (index < 3) return <Stat key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
