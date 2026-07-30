import React, { useState } from 'react';

function TextSubmitForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();


    console.log('Submitted:', text);

    try {
      const response = await fetch('https://gentle-shape-62a4.dheupyru557.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({message: text}),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      setStatus('Success!');
    } catch (error) {
      setStatus('Failed to submit.');
    }

    setText('');
    console.log('Statue: ',status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export {
  TextSubmitForm
}