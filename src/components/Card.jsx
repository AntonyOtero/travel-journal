import React from "react"

export default function Card(props) {
  return (
    <article className="card">
      <div className="card_content">
        <header className="card_header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="card_header_icon"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
          <span className="card_header_country">{props.country}</span>
          <a href={props.url} className="card_header_link muted">View on Google Maps</a>
          <h1 className="card_title">{props.destination}</h1>
          <p className="card_timespan"><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
        </header>
        <p className="card_description">{props.description}</p>
      </div>
      <img className="card_image" src={props.image} alt={props.destination} />
    </article>
  )
}