import { useEffect, useState } from "react";

export default function InfoPage() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userInfo");
    if (data) setUserInfo(JSON.parse(data));
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f0f9ff] p-6">
      <div className="bg-[#1e3a8a] text-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">📋 Your Info</h2>
        {userInfo ? (
          <ul className="space-y-2">
            <li><strong>Name:</strong> {userInfo.name}</li>
            <li><strong>Age:</strong> {userInfo.age}</li>
            <li><strong>Weight:</strong> {userInfo.weight} kg</li>
            <li><strong>Goal:</strong> {userInfo.goal}</li>
          </ul>
        ) : (
          <p className="text-center">No info found. Please fill the form first.</p>
        )}
      </div>
    </div>
  );
}
