import './Button.css';
export default function Button({ className, content, onClick = undefined }) {
  if (onClick) {
    return (
      <button className={`btn ${className}`} onClick={onClick}>
        {content}
      </button>
    );
  } else return <button className={`btn ${className}`}>{content}</button>;
}
