import { format } from 'date-fns';
import Button from '../Button/Button';
import './SearchPopup.css';
export default function SearchPopup() {
  return (
    <div className="search-popup">
      <h2 className="search-popup__title">Search</h2>
      <form className="search-popup__form">
        {/* Destination Input */}
        <div className="form-group">
          <label htmlFor="destination-input">Destination</label>
          <input type="text" name="destination" id="destination-input" />
        </div>
        {/* Check in Date Input */}
        <div className="form-group">
          <label htmlFor="check-in-date-input">Check-in Date</label>
          <input type="text" name="check-in-date" id="check-in-date-input" placeholder={`${format(new Date(), 'MM/dd/yyyy')} to ${format(
          new Date(),
          'MM/dd/yyyy'
        )}`} />
        </div>
        {/* Options Section */}
        <div className="options">
          <p className="options-title">Options</p>
          {/* Min price input */}
          <div className="form-group">
            <label htmlFor="min-price-input">Min price per night</label>
            <input
              type="number"
              min="0"
              name="min-price"
              id="min-price-input"
            />
          </div>
          {/* Max price input */}
          <div className="form-group">
            <label htmlFor="max-price-input">Max price per night</label>
            <input
              type="number"
              min="0"
              name="max-price"
              id="max-price-input"
            />
          </div>
          {/* Adult number */}
          <div className="form-group">
            <label htmlFor="adult-input">Adult</label>
            <input type="number" min="0" name="adult" id="adult-input" placeholder='1' />
          </div>
          {/* Children number */}
          <div className="form-group">
            <label htmlFor="children-input">Children</label>
            <input type="number" min="0" name="children" id="children-input" placeholder='0' />
          </div>
          {/* Room number */}
          <div className="form-group">
            <label htmlFor="room-input">Room</label>
            <input type="number" min="0" placeholder='1' name="room" id="room-input" />
          </div>
        </div>
        {/* Search Btn */}
        <Button className="search-popup__btn" content="Search" />
      </form>
    </div>
  );
}
