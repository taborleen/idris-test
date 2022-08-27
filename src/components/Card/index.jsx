import React from 'react'
import stayled from './card.module.css'

const Card = ({item}) => {
  return (
    <div className={stayled.main}>
        <div className={stayled.title}>{item.orderNo}</div>
        <div className={stayled.name}>{item.clientName}</div>
        <div className={stayled.address}>{item.address}</div>
    </div>
  )
}

export default Card 