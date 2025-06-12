import { useState, useEffect } from "react";

export default function ComplaintCountForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [districts] = useState([
    { name: "Chennai", count: 15 },
    { name: "Coimbatore", count: 22 },
    { name: "Tirunelveli", count: 18 },
    { name: "Trichy", count: 30 },
    { name: "Madurai", count: 12 },
  ]);
  const [filteredDistricts, setFilteredDistricts] = useState(districts);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredDistricts(districts);
    } else {
      setFilteredDistricts(
        districts.filter(
          (d) => d.name.toLowerCase() === searchTerm.toLowerCase()
        )
      );
    }
  }, [searchTerm, districts]);

  return (
    <div className="bg-[#d1c4e9] p-8 rounded-lg max-w-xl mx-auto shadow-md text-black">
      <label className="block mb-2 font-bold text-lg">Select District:</label>
      <select
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 rounded-md border border-black font-semibold text-black bg-white"
      >
        <option value="">All Districts</option>
        {districts.map((district, i) => (
          <option key={i} value={district.name}>
            {district.name}
          </option>
        ))}
      </select>

      <ul className="mt-6 space-y-2">
        {filteredDistricts.map((d, i) => (
          <li
            key={i}
            className="bg-white p-3 rounded shadow text-black font-semibold border border-gray-400"
          >
            {d.name}: <strong>{d.count}</strong> complaints
          </li>
        ))}
      </ul>
    </div>
  );
}
