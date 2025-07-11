import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
export default function MainDash() {
  return (
    <div className='MainDash '>
      <Cards />
      
      <Table/>
    </div>
  )
}
