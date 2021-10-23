import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.css'

const FooterButton = () => {
  return (
    <div>
      <NavLink
        className={style.link}
        to='/'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        ABOUT IXIGO
      </NavLink>
      <NavLink
        className={style.link}
        to='/popular_flight'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        POPULAR FLIGHT ROUTES
      </NavLink>
      <NavLink
        className={style.link}
        to='/top_flight'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        TOP FLIGHT ROUTES
      </NavLink>
      <NavLink
        className={style.link}
        to='/trading_flight'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        TRENDING FLIGHT ROUTES
      </NavLink>
      <NavLink
        className={style.link}
        to='/popular_flight'
        activeStyle={{
          color: 'orangered',
          borderBottom: '2px solid orangered'
        }}
      >
        POPULAR FLIGHT OPERATORS
      </NavLink>
    </div>
  )
}

export default FooterButton
