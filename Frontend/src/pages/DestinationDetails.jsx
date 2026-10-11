import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DestinationDetails = () => {
  const { id } = useParams();
  const [dest, setDest] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/destinations/${id}`);
        setDest(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!dest) return <div className="text-center p-20 text-2xl font-serif text-amber-800">Unveiling history...</div>;

  return (
    <div className="container mx-auto p-6 max-w-5xl mt-6">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-amber-200">
        
        {/* Hero Image */}
        <div className="relative h-[400px]">
          <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <h1 className="text-5xl font-serif font-bold text-white mb-2 drop-shadow-lg">{dest.name}</h1>
            <p className="text-yellow-400 text-xl font-medium drop-shadow-md">
              {dest.state} • {dest.category}
            </p>
          </div>
        </div>
        
        <div className="p-8 md:flex gap-10">
          {/* Main Content */}
          <div className="md:w-2/3">
            <h3 className="text-3xl font-serif font-bold text-red-900 mb-4 flex items-center gap-2">
              <span className="text-yellow-500">❖</span> About the Heritage
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-8 text-justify">
              {dest.description}
            </p>

            <h3 className="text-2xl font-serif font-bold text-red-900 mb-4 flex items-center gap-2">
              <span className="text-yellow-500">❖</span> Nearby Attractions
            </h3>
            <div className="flex flex-wrap gap-3">
              {dest.nearbyAttractions.map((attr, index) => (
                <span key={index} className="bg-orange-100 text-red-900 px-4 py-2 rounded-lg border border-orange-200 font-medium shadow-sm">
                  {attr}
                </span>
              ))}
            </div>
          </div>

          {/* Side Info Panel */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-amber-50 rounded-2xl p-6 border-2 border-yellow-200 shadow-inner">
              <h3 className="text-xl font-serif font-bold text-red-900 mb-6 border-b border-yellow-300 pb-2">
                Travel Information
              </h3>
              
              <div className="mb-5">
                <p className="text-sm text-orange-800 font-bold uppercase tracking-wider mb-1">Best Time to Visit</p>
                <p className="text-gray-800 text-lg font-medium">{dest.bestTimeToVisit}</p>
              </div>
              
              <div>
                <p className="text-sm text-orange-800 font-bold uppercase tracking-wider mb-1">Entry Fee</p>
                <p className="text-gray-800 text-lg font-medium">{dest.entryFee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;