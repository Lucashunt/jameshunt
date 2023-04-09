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
    <form onSubmit={handleSubmit} className='flex flex-col mt-10'>
      <label htmlFor="email" className='text-lg font-extralight '>Nyhedsbrev</label>
      <div>
      <input
        placeholder='Indtast din email'
        className=''
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <button type="submit" className="py-3 px-4 ml-2 text-white text-sm transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">Tilmeld</button>
      </div>
      {status === 'success' && <p className='text-sm mt-1'>Tak for at tilmelde dig!</p>}
      {status === 'error' && <p className='text-sm text-red-600 mt-1'>Noget gik galt.</p>}
    </form>
  );
}