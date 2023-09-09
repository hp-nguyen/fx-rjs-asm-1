import Rating from '../Rating/Rating';

export default function HotelItem({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.image_url} alt={hotel.name} className="hotel-img" />
      <div className="hotel-description">
        <a className="hotel-title" href="./detail">
          {hotel.name}
        </a>
        <p className="hotel-city">{hotel.city}</p>
        <p className="hotel-price">Starting from ${hotel.price}</p>
        <Rating className='hotel-quality' mark={hotel.rate} type={hotel.type} />
      </div>
    </div>
  );
}
