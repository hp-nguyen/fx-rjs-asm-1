import './Navbar.css';
import NavbarListItem from './NavbarListItem/NavbarListItem';
function Navbar() {
  const listData = [
    {
      type: 'Stays',
      icon: 'fa-bed',
      active: true,
    },
    {
      type: 'Flights',
      icon: 'fa-plane',
      active: false,
    },
    {
      type: 'Car rentals',
      icon: 'fa-car',
      active: false,
    },
    {
      type: 'Attractions',
      icon: 'fa-bed',
      active: false,
    },
    {
      type: 'Airport taxis',
      icon: 'fa-taxi',
      active: false,
    },
  ];
  return (
    <nav className="navbar">
      <div className="navbar__container container--mw-1024">
        <div className="navbar__header">
          <a href='/' className="navbar__brand-logo">Booking Website</a>
          <div className="navbar__btns-wrapper">
            <button className="navbar__btn">Register</button>
            <button className="navbar__btn">Login</button>
          </div>
        </div>
        <ul className="navbar__list">
          {listData.map(data => <NavbarListItem data={data} key={data.type}/>)}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
