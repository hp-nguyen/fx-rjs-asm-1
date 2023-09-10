import Button from '../../Button/Button';
import './HotelDescription.css';
export default function HotelDescription({ details }) {
  return (
    <div className="detail-description">
      <div className="text-wrapper">
        <h2 className="detail__title">{details.name}</h2>
        <p className="detail__address">
          <i className="fa fa-map-marker"></i> {details.address}
        </p>
        <p className="detail__distance">{details.distance}</p>
        <p className="detail__price-highlight">{details.price}</p>
      </div>
      <Button className="detail__btn" content="Reserve or Book Now!" />
    </div>
  );
}
