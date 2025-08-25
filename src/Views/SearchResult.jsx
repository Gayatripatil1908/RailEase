import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

    
function SearchResult() {
  // Mock Train Data
  const trains = [
    {
      name: "Rajdhani Express",
      number: "12951",
      depart: "06:00 AM",
      arrive: "02:00 PM",
      duration: "8h",
      price: 1200,
      class: "AC 3 Tier",
      type: "Express",
    },
    {
      name: "Shatabdi Express",
      number: "12009",
      depart: "07:30 AM",
      arrive: "01:00 PM",
      duration: "5h 30m",
      price: 1500,
      class: "Chair Car",
      type: "Superfast",
    },
    {
      name: "Duronto Express",
      number: "12267",
      depart: "09:45 PM",
      arrive: "06:00 AM",
      duration: "8h 15m",
      price: 1000,
      class: "Sleeper",
      type: "Duronto",
    },
    {
      name: "Garib Rath",
      number: "12203",
      depart: "11:00 AM",
      arrive: "07:30 PM",
      duration: "8h 30m",
      price: 900,
      class: "AC 3 Tier",
      type: "Express",
    },
    {
      name: "Jan Shatabdi",
      number: "12077",
      depart: "05:15 AM",
      arrive: "12:45 PM",
      duration: "7h 30m",
      price: 800,
      class: "Chair Car",
      type: "Superfast",
    },
    {
      name: "Sampark Kranti",
      number: "12649",
      depart: "03:30 PM",
      arrive: "11:45 PM",
      duration: "8h 15m",
      price: 1100,
      class: "Sleeper",
      type: "Express",
    },
    {
      name: "Humsafar Express",
      number: "22353",
      depart: "08:00 PM",
      arrive: "04:30 AM",
      duration: "8h 30m",
      price: 1600,
      class: "AC 3 Tier",
      type: "Superfast",
    },
    {
      name: "Double Decker",
      number: "12931",
      depart: "01:00 PM",
      arrive: "08:30 PM",
      duration: "7h 30m",
      price: 1400,
      class: "Chair Car",
      type: "Express",
    },
    {
      name: "Yuva Express",
      number: "12249",
      depart: "04:45 AM",
      arrive: "12:15 PM",
      duration: "7h 30m",
      price: 950,
      class: "Sleeper",
      type: "Duronto",
    },
    {
      name: "Antyodaya Express",
      number: "22877",
      depart: "10:30 PM",
      arrive: "06:45 AM",
      duration: "8h 15m",
      price: 700,
      class: "General",
      type: "Express",
    },
    {
      name: "Vande Bharat Express",
      number: "22436",
      depart: "05:00 AM",
      arrive: "11:30 AM",
      duration: "6h 30m",
      price: 2000,
      class: "AC Chair Car",
      type: "Superfast",
    },
    {
      name: "Tejas Express",
      number: "22119",
      depart: "02:00 PM",
      arrive: "09:00 PM",
      duration: "7h",
      price: 1800,
      class: "AC Chair Car",
      type: "Superfast",
    },
    {
      name: "Mahamana Express",
      number: "22418",
      depart: "06:30 AM",
      arrive: "02:30 PM",
      duration: "8h",
      price: 1300,
      class: "AC 2 Tier",
      type: "Express",
    },
    {
      name: "Swarna Jayanti",
      number: "12957",
      depart: "09:00 PM",
      arrive: "05:30 AM",
      duration: "8h 30m",
      price: 1250,
      class: "Sleeper",
      type: "Express",
    },
    {
      name: "Karnavati Express",
      number: "12933",
      depart: "03:00 PM",
      arrive: "10:30 PM",
      duration: "7h 30m",
      price: 1150,
      class: "AC 3 Tier",
      type: "Superfast",
    },
    {
      name: "Gatimaan Express",
      number: "12050",
      depart: "08:10 AM",
      arrive: "02:40 PM",
      duration: "6h 30m",
      price: 1700,
      class: "AC Chair Car",
      type: "Superfast",
    },
    {
      name: "Intercity Express",
      number: "12345",
      depart: "07:00 AM",
      arrive: "02:00 PM",
      duration: "7h",
      price: 900,
      class: "General",
      type: "Express",
    },
    {
      name: "Uday Express",
      number: "22666",
      depart: "11:30 AM",
      arrive: "07:00 PM",
      duration: "7h 30m",
      price: 1450,
      class: "AC Chair Car",
      type: "Superfast",
    },
    {
      name: "Suvidha Express",
      number: "82355",
      depart: "10:00 PM",
      arrive: "06:00 AM",
      duration: "8h",
      price: 1550,
      class: "AC 2 Tier",
      type: "Express",
    },
    {
      name: "Sampoorna Kranti",
      number: "12393",
      depart: "04:00 PM",
      arrive: "11:30 PM",
      duration: "7h 30m",
      price: 1350,
      class: "Sleeper",
      type: "Express",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showRoute, setShowRoute] = useState(null);

  // Mock seat availability and amenities
  const seatAvailability = ["Available", "Waitlist", "Few Left", "Available", "Available", "Waitlist", "Few Left", "Available", "Available", "Waitlist", "Available", "Few Left", "Available", "Available", "Waitlist", "Available", "Few Left", "Available", "Available", "Waitlist"];
  const amenities = ["WiFi", "Food", "Charging", "AC", "Clean Toilets"];

  // Find cheapest and fastest train
  const cheapestTrain = trains.reduce((min, t) => t.price < min.price ? t : min, trains[0]);
  const fastestTrain = trains.reduce((min, t) => {
    const getMinutes = (d) => {
      const m = d.match(/(\d+)h(?:\s*(\d+)m)?/);
      return m ? parseInt(m[1])*60 + (m[2]?parseInt(m[2]):0) : 9999;
    };
    return getMinutes(t.duration) < getMinutes(min.duration) ? t : min;
  }, trains[0]);
  // Get user search from location state (React Router)
  const location = useLocation();
  const searchParams = location.state || {};
  const source = searchParams.source || "Delhi";
  const destination = searchParams.destination || "Mumbai";
  const date = searchParams.date || "20 Aug 2025";

  return (
    <>
    <Navbar />

    <div style={{backgroundColor: '#f9f3ef'}} className="pt-24 min-h-screen">
      {/* Search Summary */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <h2 className="text-2xl font-bold" style={{color: '#1b3c53'}}>
          Trains from <span style={{color: '#456882'}}>{source}</span> → <span style={{color: '#456882'}}>{destination}</span> on <span style={{color: '#d2c1b6'}}>{date}</span>
        </h2>
        <p style={{color: '#456882'}} className="mt-2">Showing {trains.length} available trains</p>
      </div>

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside style={{backgroundColor: '#d2c1b6', color: '#1b3c53'}} className="p-6 shadow rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Filters & Sorting</h3>
          <label className="block mb-2 font-medium">Train Type</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            style={{borderColor: '#456882', color: '#1b3c53', backgroundColor: '#f9f3ef'}}
            className="w-full p-2 border rounded mb-4"
            value={filter}
          >
            <option value="All">All</option>
            <option value="Express">Express</option>
            <option value="Superfast">Superfast</option>
            <option value="Duronto">Duronto</option>
          </select>

          <label className="block mb-2 font-medium">Sort By</label>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            style={{borderColor: '#456882', color: '#1b3c53', backgroundColor: '#f9f3ef'}}
            className="w-full p-2 border rounded mb-4"
            value={sortBy}
          >
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="duration">Duration</option>
            <option value="depart">Departure Time</option>
          </select>

          <label className="block mb-2 font-medium">Max Price</label>
          <input type="number" placeholder="Enter max price" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} style={{borderColor: '#456882', color: '#1b3c53', backgroundColor: '#f9f3ef'}} className="w-full p-2 border rounded mb-4" />
        </aside>

        {/* Train Results */}
        <main className="md:col-span-3 space-y-6">
          {(() => {
            let filtered = trains.filter((train) => (filter === "All" || train.type === filter));
            if (maxPrice) filtered = filtered.filter(train => train.price <= parseInt(maxPrice));
            if (sortBy === "price") filtered = filtered.slice().sort((a,b)=>a.price-b.price);
            if (sortBy === "duration") {
              const getMinutes = d => { const m = d.match(/(\d+)h(?:\s*(\d+)m)?/); return m ? parseInt(m[1])*60 + (m[2]?parseInt(m[2]):0) : 9999; };
              filtered = filtered.slice().sort((a,b)=>getMinutes(a.duration)-getMinutes(b.duration));
            }
            if (sortBy === "depart") {
              const getTime = t => { const [h,m,ampm] = t.match(/(\d+):(\d+)\s*(AM|PM)/).slice(1); return (parseInt(h)%12 + (ampm==="PM"?12:0))*60+parseInt(m); };
              filtered = filtered.slice().sort((a,b)=>getTime(a.depart)-getTime(b.depart));
            }
            return filtered.map((train, i) => (
              <div
                key={i}
                style={{backgroundColor: '#d2c1b6', color: '#1b3c53', border: train.number===cheapestTrain.number ? '2px solid #4caf50' : train.number===fastestTrain.number ? '2px solid #2196f3' : 'none'}}
                className="shadow-md rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition relative"
              >
                {/* Highlight badge */}
                {train.number===cheapestTrain.number && <span style={{position:'absolute',top:10,right:10,background:'#4caf50',color:'#fff',padding:'2px 8px',borderRadius:'8px',fontSize:'0.8rem'}}>Cheapest</span>}
                {train.number===fastestTrain.number && <span style={{position:'absolute',top:10,right:train.number===cheapestTrain.number?80:10,background:'#2196f3',color:'#fff',padding:'2px 8px',borderRadius:'8px',fontSize:'0.8rem'}}>Fastest</span>}
                {/* Train Info */}
                <div>
                  <h3 className="text-xl font-bold">
                    {train.name} <span style={{color: '#456882'}} className="text-sm">({train.number})</span>
                  </h3>
                  <p style={{color: '#456882'}}>
                    {train.depart} → {train.arrive} • {train.duration}
                  </p>
                  <p style={{color: '#1b3c53'}}>{train.class} | {train.type}</p>
                  <div className="mt-2 flex gap-2 text-xs">
                    <span style={{background:'#f9f3ef',color:'#456882',padding:'2px 6px',borderRadius:'6px'}}>Seats: {seatAvailability[i%seatAvailability.length]}</span>
                    {amenities.map((am,j)=>(<span key={j} style={{background:'#f9f3ef',color:'#1b3c53',padding:'2px 6px',borderRadius:'6px'}}>{am}</span>))}
                  </div>
                </div>

                {/* Price & Button */}
                <div className="text-right">
                  <p className="text-lg font-semibold mb-2" style={{color: '#456882'}}>₹{train.price}</p>
                  <button style={{backgroundColor: '#456882', color: '#f9f3ef'}} className="px-4 py-2 rounded-xl shadow hover:bg-[#1b3c53] hover:text-[#d2c1b6] transition">
                    Book Now
                  </button>
                  <button style={{backgroundColor: '#2196f3', color: '#fff',marginLeft:'8px'}} className="px-3 py-1 rounded-xl shadow hover:bg-[#1b3c53] hover:text-[#d2c1b6] transition" onClick={()=>setShowRoute(train)}>
                    View Route
                  </button>
                </div>
              </div>
            ));
          })()}
          {/* Route Modal */}
          {showRoute && (
            <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.3)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setShowRoute(null)}>
              <div style={{background:'#fff',padding:'32px',borderRadius:'16px',minWidth:'320px',maxWidth:'90vw',color:'#1b3c53',position:'relative'}} onClick={e=>e.stopPropagation()}>
                <h2 className="text-xl font-bold mb-2">Route for {showRoute.name} ({showRoute.number})</h2>
                <p>Delhi → Mumbai</p>
                <p>Departure: {showRoute.depart} | Arrival: {showRoute.arrive}</p>
                <p>Duration: {showRoute.duration}</p>
                <div className="mt-4">(Mock route visualization here)</div>
                <button style={{position:'absolute',top:10,right:10,background:'#d2c1b6',color:'#1b3c53',padding:'2px 8px',borderRadius:'8px'}} onClick={()=>setShowRoute(null)}>Close</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
    <Footer />
    </>
  );
}

    


export default SearchResult;