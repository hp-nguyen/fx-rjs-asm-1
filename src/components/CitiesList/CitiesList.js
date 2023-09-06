import './CitiesList.css';
import City from './City';
const citiesData = [
  {
    name: 'Dublin',
    subText: '123 properties',
    image: './images/city_1.webp',
  },
  {
    name: 'Reno',
    subText: '533 properties',
    image: './images/city_2.webp',
  },
  {
    name: 'Austin',
    subText: '532 properties',
    image: './images/city_3.webp',
  },
];
export default function CitiesList() {
  return (
    <div className="cities-container container--mw-1024">
      {citiesData.map(city => <City city={city} key={city.name}/>)}
    </div>
  );
}
