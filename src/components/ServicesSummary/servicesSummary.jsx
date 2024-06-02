import './servicesSummary.css';

export const ServicesSummary = ({ services, service1, service2, service3, service4 }) => {
    return (
        <div className="summary__services">
        <h3>{services}</h3>
        <div className="summary__service">{service1}</div>
        <div className="summary__service">{service2}</div>
        <div className="summary__service">{service3}</div>
        <div className="summary__service">{service4}</div>
      </div>
    )
};