import React from 'react'
import { cardsData } from '../../../data/data'
import Card from '../Card/Card'

export default function Cards() {
  return (
    <div className='Cards'>
  {cardsData.map((card, index) => (
    <div key={index} className='parentCard'>
      <Card
        title={card.title}
        color={card.color}
        barValue={card.barValue}
        value={card.value}
        png={card.png}
        series={card.series}
      />
    </div>
  ))}
</div>

  )
}
