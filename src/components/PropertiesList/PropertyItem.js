export default function PropertyItem({props}) {
  return <div className="property-card">
    <img src={props.image} alt={props.name} className="property-img" />
    <div className="property-description">
      <h3 className="property-title">{props.name}</h3>
      <p className="property-quantity">{props.count} hotels</p>
    </div>
  </div>
};
