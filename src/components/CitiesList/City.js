export default function City({ city }) {
  return (
    <div className="city-card">
      <img className="city-img" src={city.image} alt={city.name} />
      <div className="text-overlay">
        <h2 className="city-name">{city.name}</h2>
        <h3 className="sub-text">{city.subText}</h3>
      </div>
    </div>
  );
}
