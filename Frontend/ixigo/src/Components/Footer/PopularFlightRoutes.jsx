import React from 'react'
import style from "./Footer.module.css"

var popular_route = [
    'Bangalore To Hyderabad Flight',
    'Hyderabad To Bangalore Flight',
    'Delhi To Dehradun Flight',
    'Delhi To Lucknow Flight',
    'Lucknow To Delhi Flight',
    'Dehradun To Delhi Flight',
    'Pune To Nagpur Flight',
    'Chennai To Madurai Flight',
    'Coimbatore To Chennai Flight',
    'Hyderabad To Mumbai Flight',
    'Hyderabad To Vijayawada Flight',
    'Bhopal To Indore Flight',
    'Vijayawada To Hyderabad Flight',
    'Agra To Delhi Flight',
    'Bangalore To Mumbai Flight',
    'Pune To Bangalore Flight',
    'Delhi To Agra Flight',
    'Delhi To Ludhiana Flight',
    'Mumbai To Bangalore Flight',
    'Nagpur To Pune Flight'
  ]

const PopularFlightRoutes = () => {
  
  return (
      <div className={style.boxmargin}>
          
      {popular_route.map(item=>{
          return (
              <div className={style.Routes_flot}>{item}</div>
          )
      })}
      </div>
  )
}

export default PopularFlightRoutes
