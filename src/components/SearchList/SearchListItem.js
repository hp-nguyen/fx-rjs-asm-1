import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import './SearchListItem.css';
export default function SearchListItem({hotel}) {
  return (
    <li className="search-item-card">
      <img
        className="search-item__img"
        src={hotel.image_url}
        alt={hotel.name}
      />
      <div className="search-item__description">
        <h2 className="search-item__title">{hotel.name}</h2>
        <span className="search-item__distance">{hotel.distance} from center</span>
        <span className="search-item__promo">{hotel.tag}</span>
        <span className="search-item__sub-title">
          {hotel.description}
        </span>
        <span className="search-item__features">
          {hotel.type}
        </span>
        {hotel.free_cancel && <span className="search-item__cancellation">
          <b>Free cancellation</b> You can cancel later, so lock in this great
          price today!
        </span>}
      </div>
      <div className="search-item__details">
        <Rating mark={hotel.rate} type={hotel.rate_text} />
        <div className="pricing">
          <span className="price">${hotel.price}</span>
          <span className="tax-fee">Includes taxes and fees</span>
        <Button content='See availability'/>
        </div>
      </div>
    </li>
  );
}
