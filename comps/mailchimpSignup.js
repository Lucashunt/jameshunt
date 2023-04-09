import { useState } from 'react';
import { subscribe } from '../utils/mailchimp.js';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await subscribe(email);
      
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>

      {status === 'success' && <p>Thank you for subscribing!</p>}
      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}