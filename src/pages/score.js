import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GoalTrackerForm from '../components/GoalTrackerForm';
import ChatForm from '../components/ChatForm';

export default function Score() {
  const [score, setScore] = useState(0);
  const [recommendation, setRecommendation] = useState('');
  const router = useRouter();

  useEffect(() => {
    const tasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
    const calculatedScore = Math.min(tasks.length * 10, 100);
    setScore(calculatedScore);

    if (calculatedScore >= 80) setRecommendation("🌟 Excellent! You're crushing your routines!");
    else if (calculatedScore >= 50) setRecommendation("👍 Good job! Let's aim a little higher.");
    else if (calculatedScore > 0) setRecommendation("🚀 Let's get more consistent with your tasks!");
    else setRecommendation("📝 No routines yet. Add your first one to get started.");
  }, []);

  const signOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-lime-200 text-black flex flex-col items-center justify-start px-4 py-10 gap-12">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl text-center">
          <h1 className="text-2xl font-bold text-lime-700 mb-4">📊 Your Wellness Score</h1>
          <div className="text-5xl font-extrabold text-green-800 mb-3">{score} / 100</div>
          <p className="text-md text-gray-700 mb-4">{recommendation}</p>
          <button
            onClick={signOut}
            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold text-white"
          >
            🔓 Log Out
          </button>
        </div>

        <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-lime-700 mb-4 text-center">🎯 Weekly Mission Planner</h2>
          <GoalTrackerForm />
        </div>
      </div>

      <div className="w-full max-w-2xl mt-4 p-6 bg-white rounded-2xl shadow-lg border border-green-300">
        <ChatForm />
      </div>
    </div>
  );
}
