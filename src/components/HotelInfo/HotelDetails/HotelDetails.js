import NightPrice from '../NightPrice/NightPrice';
import './HotelDetails.css';
export default function HotelDetails({title, paragraph, nineNightPrice}) {
  return (
    <div className="hotel-details">
      <div className="details-text">
        <h2 className='details-title'>{title}</h2>
        <p className='details-paragraph'>{paragraph}</p>
      </div>
      <NightPrice nineNightPrice={nineNightPrice}/>
    </div>
  );
}
