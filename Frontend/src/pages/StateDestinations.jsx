import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const StateDestinations = () => {
  const { stateName } = useParams();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        console.log("1. State clicked:", stateName);
        
        const apiUrl = `http://localhost:5000/api/destinations?state=${encodeURIComponent(stateName)}`;
        console.log("2. Fetching from URL:", apiUrl);
        
        const res = await axios.get(apiUrl);
        console.log("3. Data received from backend:", res.data);
        
        setDestinations(res.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDestinations();
  }, [stateName]);

  return (
    <div className="container mx-auto p-6 mt-8">
      <h1 className="text-4xl font-serif font-bold text-red-900 mb-8 text-center border-b-2 border-yellow-500 pb-4 inline-block mx-auto flex justify-center">
        Jewels of {stateName}
      </h1>
      
      {loading ? (
        <p className="text-center text-xl text-amber-800 mt-10 font-medium animate-pulse">Loading heritage sites...</p>
      ) : destinations.length === 0 ? (
        <p className="text-center text-xl text-amber-800 mt-10 font-medium">More heritage sites being added soon...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map(dest => (
            <div key={dest._id} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img src={dest.imageUrl} alt={dest.name} className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-red-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {dest.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-2">{dest.name}</h3>
                <Link to={`/destination/${dest._id}`} className="inline-block mt-4 text-orange-600 font-bold hover:text-red-700 transition-colors border-b border-orange-600 hover:border-red-700 pb-1">
                  Explore Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StateDestinations;