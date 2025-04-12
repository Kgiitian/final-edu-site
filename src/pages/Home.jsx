import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-indigo-600">Welcome to EduSite</h1>
      <p className="mt-4 text-gray-700">Your gateway to quality study materials.</p>
      <div className="mt-6 space-x-4">
        <Link to="/study-material" className="bg-indigo-600 text-white px-4 py-2 rounded">Study Material</Link>
        <Link to="/contact" className="bg-emerald-600 text-white px-4 py-2 rounded">Contact Us</Link>
      </div>
    </div>
  );
}