import './PropertiesList.css';
import PropertyItem from './PropertyItem';

// Properties List
const propsList = [
  {
    name: 'Hotels',
    count: 233,
    image: './images/type_1.webp',
  },
  {
    name: 'Apartments',
    count: 2331,
    image: './images/type_2.jpg',
  },
  {
    name: 'Resorts',
    count: 2331,
    image: './images/type_3.jpg',
  },
  {
    name: 'Villas',
    count: 2331,
    image: './images/type_4.jpg',
  },
  {
    name: 'Cabins',
    count: 2331,
    image: './images/type_5.jpg',
  },
];

export default function PropertiesList() {
  return (
    <section className="container--mw-1024">
      <h2 className="properties-title">Browse by property type</h2>
      <div className="properties-container">
        {propsList.map(data => (
          <PropertyItem props={data} key={data.name} />
        ))}
      </div>
    </section>
  );
}
