import { useState } from 'react';


export default function NewsletterSignup() {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
       const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
      });
     if (res.status === 200) {
        setStatus('success');
     } else {
        setStatus('error');
     }
     
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

      {status === 'success' && <p>Tak for at tilmelde dig!</p>}
      {status === 'error' && <p>Noget gik galt.</p>}
    </form>
  );
}