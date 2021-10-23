import React from 'react'
import style from './Footer.module.css'

import FooterLink from './FooterLink'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FooterRoutes from './Routes'

const Footer = () => {
  var footerDescription = [
    'ABOUT US',
    'PRESS',
    'FAQ',
    'MOBILE',
    'PRIVACY',
    'TERMS OF USE',
    'CAREERS',
    'CUSTOMER SERVICE'
  ]

  return (
    <div>
      <div className={style.first_Container}>
        <div className={style.text}>
          <p>Planning your next trip?</p>
          <span>
            Subscribe to our newsletter. Get the latest travel trends & deals!
          </span>
        </div>
        <div className={style.input}>
          <input
            type='text'
            aria-label='email'
            placeholder='Enter email id'
            className={style.email_input}
          />
          <button className={style.email_button}>SUBSCRIBE</button>
        </div>
      </div>

      <div className={style.Footer_second_container}>
        <div className={style.footer_button}>
          <FooterLink />
        </div>
        <div>
        <FooterRoutes />
        </div>
        <div className={style.footerDescription}>
          {footerDescription.map(item => {
            return <li>{item}</li>
          })}
          <span>
            <FacebookIcon
              fontSize='small'
              style={{ marginLeft: '22vw', marginRight: '1vw' }}
            />
            <TwitterIcon fontSize='small' style={{ marginLeft: '1vw', marginRight: 'vw' }} />
            <YouTubeIcon fontSize='small' style={{ marginLeft: '1vw', marginRight: 'vw' }}/>
          </span>
        </div>
      </div>

      <div className={style.Footer_third_container}>
      © 2021 Le Travenues Technology Pvt. Ltd. India. All brands are trademarks of their respective owners.
      </div>
    </div>
  )
}

export default Footer
