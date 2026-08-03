import { useState } from 'react';

import { isValidEmail } from '@/utils/validators';
import { setItem } from '@/utils/storage';
import { STORAGE_KEYS } from '@/utils/constants';
import './Newsletter.css';

/**
 * Newsletter signup form.
 */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setIsError(true);
      setMessage('Please enter a valid email address.');
      return;
    }
    setIsError(false);
    setMessage('Thank you for subscribing!');
    setEmail('');
    setItem(STORAGE_KEYS.newsletter, true);
  };

  return (
    <div className="newsletter">
      <h3 className="newsletter__title">Subscribe to our newsletter</h3>
      <p className="newsletter__text">
        Get the latest products and exclusive offers delivered to your inbox.
      </p>
      <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          className="newsletter__input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button type="submit" className="btn btn--accent">
          Subscribe
        </button>
      </form>
      {message && (
        <p
          className={`newsletter__message${isError ? ' newsletter__message--error' : ''}`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Newsletter;
