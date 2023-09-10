import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import Button from '../../Button/Button';
import 'react-date-range/dist/styles.css'; // main style of date range
import 'react-date-range/dist/theme/default.css'; // theme css of date range
import './HeaderSearch.css';
import { useNavigate } from 'react-router-dom';
export default function HeaderSearch() {
  // Modal's State
  const [modalOpen, setModalOpen] = useState(false);
  // Day range State
  const [dayRange, setDayRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const navigate = useNavigate();
  function handleSearch(event) {
    event.preventDefault();
    navigate('/search')
  }

  return (
    <form className="header__search-form">
      {/* Search Place */}
      <div className="form-control">
        <label htmlFor="searchPlace">
          <i className="fa fa-bed"></i>
        </label>
        <input
          type="text"
          name="searchPlace"
          id="searchPlace"
          placeholder="Where are you going?"
        />
      </div>
      {/* Date Picker */}
      <div
        className="form-control date-picker"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}>
        <i className="fa fa-calendar"></i>
        <span>{`${format(dayRange[0].startDate, 'MM/dd/yyyy')} to ${format(
          dayRange[0].endDate,
          'MM/dd/yyyy'
        )}`}</span>
        {/* Render Date Modal */}
        {modalOpen && (
          <div onClick={event => event.stopPropagation()}>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDayRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dayRange}
              minDate={new Date()}
              className="date-range-modal"
            />
          </div>
        )}
      </div>
      {/* People quantity */}
      <div className="form-control">
        <i className="fa fa-user"></i>
        <span id="searchQuantity">1 adult 0 children 1 room</span>
      </div>
      <Button content="Search" onClick={handleSearch} />
    </form>
  );
}
