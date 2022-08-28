import React from 'react'
import locationIcon from "../images/location-icon.png"

function Card(props) {
  return (
    <section className='card-container'>
    <main className='card'>
        <img src={props.img} alt='main' className='card-image' />
        
        <div className='cardtext-area'>
           <div className='flex'><img src={locationIcon} alt="logo" srcset="" className='icon'/>
            <p className='locate'>{props.location}</p>
            <a href={props.googleMapUrl} className='link'>View on google map</a></div>
            <h3 className='alpha-text'>{props.title}</h3>
            <span className='duration'><p>{props.startDate} - {props.endDate}</p></span>
            <p className='description'>{props.description}</p>
        </div>
    </main>
    
    </section>
  )
}

export default Card
