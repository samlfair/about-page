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
  let number = data.number;
  if (data.icon !== "calendar") number = number.toLocaleString();
  return (
    <div className="stat-box">
      <div className="icon">
        <FontAwesomeIcon icon={icons[data.icon]} />
      </div>
      <div className="number">{number}</div>
      <div className="text">{RichText.render(data.description)}</div>
    </div>
  );
}
