import './navbar-list-item.css';
function NavbarListItem({ data }) {
  return (
    <li className={`navbar__list-item ${data.active ? 'active' : ''}`}>
      <i className={`fa ${data.icon}`}></i> {data.type}
    </li>
  );
}
export default NavbarListItem;
