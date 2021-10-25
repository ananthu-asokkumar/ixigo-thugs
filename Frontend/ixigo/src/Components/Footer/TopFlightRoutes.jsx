import React from 'react'
import style from './Footer.module.css'

var topBus = [
  'Nagpur To Raipur flight',
  'Vijayawada To Bangalore flight',
  'Ahmedabad To Surat flight',
  'Ahmedabad To Mumbai flight',
  'Indore To Mumbai flight',
  'Indore To Pune flight',
  'Jodhpur To Jaipur flight',
  'Chennai To Hyderabad flight',
  'Pune To Indore flight',
  'Bikaner To Jaipur flight',
  'Indore To Ahmedabad flight',
  'Pune To Aurangabad flight',
  'Ranchi To Bhubaneswar flight',
  'Kanpur To Delhi flight',
  'Tirupati To Bangalore flight',
  'Lucknow To Banaras flight',
  'Jammu To Delhi flight',
  'Delhi To Gorakhpur flight',
  'Delhi To Kanpur flight',
  'Jalandhar To Delhi flight'
]

const TopBusRoutes = () => {
  return (
    <div className={style.boxmargin}>
      {topBus.map(item => {
        return <div className={style.Routes_flot}>{item}</div>
      })}
    </div>
  )
}

export default TopBusRoutes
