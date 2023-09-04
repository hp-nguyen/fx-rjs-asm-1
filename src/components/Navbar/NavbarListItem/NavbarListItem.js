import './NavbarListItem.css';
function NavbarListItem({ data }) {
  return (
    <li className={`navbar__list-item ${data.active ? 'active' : ''}`}>
      <i className={`fa ${data.icon}`}></i><span>{data.type}</span>
    </li>
  );
}
export default NavbarListItem;
