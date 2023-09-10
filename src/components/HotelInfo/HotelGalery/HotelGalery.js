import './HotelGalery.css';
export default function HotelGalery({ imgPaths, name }) {
  return (
    <div className="detail-galery">
      {imgPaths.map(path => (
        <div className="galery-item" key={path}>
          <img src={path} alt={name}></img>
        </div>
      ))}
    </div>
  );
}
