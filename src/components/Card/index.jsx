import React from "react";
import { Link } from "react-router-dom";
import stayled from "./card.module.scss";

const Card = ({ item }) => {
  return (
    <Link to={`${item.id}`} className={stayled.main}>
      <div className={stayled.title}>{item.orderNo}</div>
      <div className={stayled.name}>{item.clientName}</div>
      <div className={stayled.address}>{item.address}</div>
    </Link>
  );
};

export default Card;
