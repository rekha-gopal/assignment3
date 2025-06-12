import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0fff0] flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full text-center px-8 py-12 space-y-6">
        <h1 className="text-4xl font-bold text-[#2e7d32]">
          Welcome to Diet & Nutrition Tracker
        </h1>
        <p className="text-gray-600 text-lg">
          Track your health, eat better, live better!
        </p>

        <Link href="/ComplaintCountPage">
          <button className="bg-[#673ab7] hover:bg-[#5e35b1] text-white px-6 py-3 rounded-lg text-lg w-full">
            View Complaints
          </button>
        </Link>

        <Link href="/userinfo">
          <button className="bg-[#4CAF50] hover:bg-[#388e3c] text-white px-6 py-3 rounded-lg text-lg w-full">
            Enter User Info
          </button>
        </Link>
      </div>
    </div>
  );
}
