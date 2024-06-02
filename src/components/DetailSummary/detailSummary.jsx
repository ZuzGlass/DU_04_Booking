import './detailSummary.css';

export const DetailSummary = ({ detail, number, dates, guests, services, roomTotal, checkIn, checkOut }) => {
    return (
    <div className="summary__detail">
    <h3>{detail}</h3>
    <div className="summary__number">{number}</div>
    <div className="summary__dates">{dates}</div>
    <div className="summary__guests">{guests}</div>
    <div className="summary__services">{services}</div>
    <div className="summary__room-total">{roomTotal}</div>
    <div className="summary__check-in">{checkIn}</div>
    <div className="summary__check-out">{checkOut}</div>
  </div>
  )
};