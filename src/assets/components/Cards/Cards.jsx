import React, { useState } from 'react'
import { cardsData } from '../../../data/data'
import Card from '../Card/Card'
import './Cards.css'
export default function Cards() {
   const [expandedIndex, setExpandedIndex] = useState(null);
  return (
     <div className="cards">
      {cardsData.map((card, index) => (
        (expandedIndex === null || expandedIndex === index) && (
          <div key={index} className="parentCard">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              isExpanded={expandedIndex === index}
              onExpand={() => setExpandedIndex(index)}
              onClose={() => setExpandedIndex(null)}
            />
          </div>
        )
      ))}
    </div>

  )
}
