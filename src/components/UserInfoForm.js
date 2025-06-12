import { useState } from "react";
import { useRouter } from "next/router";

export default function UserInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    district: "",
    complaints: "",
    diet: ""
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(formData));
    router.push("/tracker"); // ✅ Will navigate to tracker
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="age" onChange={handleChange} placeholder="Age" required />
      <input name="district" onChange={handleChange} placeholder="District" required />
      <input name="complaints" onChange={handleChange} placeholder="Complaints" required />
      <input name="diet" onChange={handleChange} placeholder="Diet" required />
      <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
