import './Header.css'
import Button from '../Button/Button';
import HeaderSearch from './HeaderSearch/HeaderSearch';
export default function Header() {
  return <header className='header'>
    <div className="header__container container--mw-1024">
      <h2 className="header__title">A lifetime of discounts? It's Genius.</h2>
      <p className="header__description">Get rewarded for your travels - unlock instant savings of 10% or more with a free account</p>
      <Button className="header__btn" content="Sign in / Register"/>
      <HeaderSearch/>
    </div>
  </header>
}