import Button from '../../Button/Button';
import './NightPrice.css';
export default function NightPrice({nineNightPrice}) {
  return <div className="night-price-card">
    <h3 className="night-price__title">Perfect for a 9-night stay!</h3>
    <p className="night-price__text">Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
    <p className="nine-night-price"><span className='night-price'>${nineNightPrice}</span> {`(9 nights)`}</p>
    <Button className='night-price-btn' content='Reserve or Book Now!'/>
  </div>
};
