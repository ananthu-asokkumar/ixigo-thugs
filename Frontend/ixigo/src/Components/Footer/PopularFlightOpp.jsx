import React from 'react'
import style from "./Footer.module.css"

var popular_route = [
    "APSRTC", "UPSRTC" ,"Kerala", "RTCHRTC", "OSRTC","RSRTC","TSRTC","MSRTC","KSRTC","TNSTC","GSRTCHR (Haryana Roadways)","VRLTravels","Kaveri Travels","SRS Travels","PEPSUBMTC","ASTC","KTCL","UTC"
  ]


const PopularFlightOpp = () => {
    return  (
        <div className={style.boxmargin}>
          {popular_route.map(item => {
            return <div className={style.Routes_flot}>{item}</div>
          })}
        </div>
      )
}

export default PopularFlightOpp
