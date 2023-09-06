import Button from '../Button/Button';
import './SubcribeSection.css';
export default function SubcribeSection() {
  return (
    <section className="subcribe-section">
      <h2 className="subcribe-section__title">Save time, save money!</h2>
      <p className="subcribe-section__description">
        Sign up and we'll send the best deals to you
      </p>
      <form className="subcribe-form">
        <input className="email-input" type="email" placeholder="Your Email" />
        <Button content="Subcribe" />
      </form>
    </section>
  );
}
