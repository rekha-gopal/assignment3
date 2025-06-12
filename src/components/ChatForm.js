import { useState } from 'react';

export default function ChatForm() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });
      const data = await res.json();
      setResponse(data.response || 'No response received.');
    } catch (err) {
      setResponse('Error: ' + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 to-lime-100 p-6 rounded shadow max-w-lg mx-auto text-black">
      <h2 className="text-xl font-bold mb-4 text-green-800">💡 Ask Your AI Health Assistant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="What's on your mind? Type your diet or health question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border border-green-300 rounded shadow"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-lime-400 hover:brightness-105 text-white px-4 py-2 rounded font-semibold"
        >
          Get Advice ✨
        </button>
      </form>
      {loading && <p className="text-gray-700 mt-4">Thinking...</p>}
      {response && <p className="mt-4 text-green-900 font-medium whitespace-pre-line">{response}</p>}
    </div>
  );
}
