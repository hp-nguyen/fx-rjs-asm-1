import './Rating.css';
export default function Rating({ className, mark, type }) {
  return (
    <div className={`rating ${className}`}>
      <span className="mark">{mark}</span>
      <span className="type">{type}</span>
    </div>
  );
}
