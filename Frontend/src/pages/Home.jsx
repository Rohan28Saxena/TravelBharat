import { Link } from 'react-router-dom';

const states = ["Delhi","Rajasthan", "Punjab", "Maharashtra", "Uttar Pradesh", "Goa", "Tamil Nadu","Assam","Gujarat"];

const Home = () => {
  return (
    <div className="container mx-auto p-6 mt-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-red-900 mb-4 drop-shadow-sm">Discover Incredible India</h1>
        <p className="text-xl text-amber-800 font-medium">Select a state to explore its rich heritage and beauty</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {states.map((state) => (
          <Link 
            key={state} 
            to={`/state/${state}`} 
            className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-amber-200 hover:border-yellow-500 text-center flex items-center justify-center min-h-[120px]"
          >
            {/* Decorative inner border on hover */}
            <div className="absolute inset-2 border border-transparent group-hover:border-yellow-200 rounded-lg transition-all duration-300"></div>
            <span className="text-xl font-serif font-bold text-red-900 group-hover:text-orange-600 transition-colors z-10">
              {state}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;