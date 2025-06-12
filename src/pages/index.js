import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !age) return;
    if (parseInt(age) > 120) {
      alert("Please enter a valid age (below 120). ");
      return;
    }
    const user = { username, password, age };
    localStorage.setItem('userInfo', JSON.stringify(user));
    router.push('/score');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full text-center px-10 py-12 space-y-6">
        <h1 className="text-4xl font-extrabold text-orange-700">🌟 Create Your Wellness Account</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="👤 Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-orange-300 rounded text-black shadow"
            required
          />
          <input
            type="password"
            placeholder="🔐 Choose a secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-orange-300 rounded text-black shadow"
            required
          />
          <input
            type="number"
            placeholder="🎂 What's your age?"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border border-orange-300 rounded text-black shadow"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 rounded w-full shadow hover:brightness-110"
          >
            🚀 Start Tracking
          </button>
        </form>
      </div>
    </div>
  );
}
