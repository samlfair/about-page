import React from "react";
import { RichText } from "prismic-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import { faMale } from "@fortawesome/free-solid-svg-icons";

const icons = {
  calendar: faCalendarAlt,
  "credit card": faCreditCard,
  person: faMale,
};

export default function Stat({ data }) {
  console.log(data);
  console.log(data.icon);
  return (
    <div className="stat-box">
      <div className="icon">
        <FontAwesomeIcon icon={icons[data.icon]} />
      </div>
      <div className="number">{data.number}</div>
      <div className="text">{RichText.render(data.description)}</div>
    </div>
  );
}
