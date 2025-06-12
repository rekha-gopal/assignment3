// pages/userinfo.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function UserInfoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    district: '',
    complaints: '',
    diet: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userInfo', JSON.stringify(formData));
    console.log("Saved user info:", formData); // ✅ Check this in console
    router.push('/tracker'); // ✅ Go to tracker
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Enter Your Info</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" required className="block border mb-2 p-2" />
        <input name="age" onChange={handleChange} placeholder="Age" required className="block border mb-2 p-2" />
        <input name="district" onChange={handleChange} placeholder="District" required className="block border mb-2 p-2" />
        <input name="complaints" onChange={handleChange} placeholder="Complaints" required className="block border mb-2 p-2" />
        <input name="diet" onChange={handleChange} placeholder="Diet" required className="block border mb-2 p-2" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
