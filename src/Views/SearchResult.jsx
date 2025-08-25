import React from 'react'
import { useState } from 'react';
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

  return (

    <>
    <Navbar />

    <div style={{backgroundColor: '#f9f3ef'}} className="pt-24 min-h-screen">
      {/* Search Summary */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <h2 className="text-2xl font-bold" style={{color: '#1b3c53'}}>
          Trains from <span style={{color: '#456882'}}>Delhi</span> → <span style={{color: '#456882'}}>Mumbai</span> on <span style={{color: '#d2c1b6'}}>20 Aug 2025</span>
        </h2>
        <p style={{color: '#456882'}} className="mt-2">Showing {trains.length} available trains</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside style={{backgroundColor: '#d2c1b6', color: '#1b3c53'}} className="p-6 shadow rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <label className="block mb-2 font-medium">Train Type</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            style={{borderColor: '#456882', color: '#1b3c53', backgroundColor: '#f9f3ef'}}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="All">All</option>
            <option value="Express">Express</option>
            <option value="Superfast">Superfast</option>
            <option value="Duronto">Duronto</option>
          </select>

          <label className="block mb-2 font-medium">Departure Time</label>
          <input type="time" style={{borderColor: '#456882', color: '#1b3c53', backgroundColor: '#f9f3ef'}} className="w-full p-2 border rounded mb-4" />

          <label className="block mb-2 font-medium">Max Price</label>
          <input type="number" placeholder="Enter max price" style={{borderColor: '#456882', color: '#1b3c53', backgroundColor: '#f9f3ef'}} className="w-full p-2 border rounded mb-4" />
        </aside>

        {/* Train Results */}
        <main className="md:col-span-3 space-y-6">
          {trains
            .filter((train) => filter === "All" || train.type === filter)
            .map((train, i) => (
              <div
                key={i}
                style={{backgroundColor: '#d2c1b6', color: '#1b3c53'}}
                className="shadow-md rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition"
              >
                {/* Train Info */}
                <div>
                  <h3 className="text-xl font-bold">
                    {train.name} <span style={{color: '#456882'}} className="text-sm">({train.number})</span>
                  </h3>
                  <p style={{color: '#456882'}}>
                    {train.depart} → {train.arrive} • {train.duration}
                  </p>
                  <p style={{color: '#1b3c53'}}>{train.class} | {train.type}</p>
                </div>

                {/* Price & Button */}
                <div className="text-right">
                  <p className="text-lg font-semibold mb-2" style={{color: '#456882'}}>₹{train.price}</p>
                  <button style={{backgroundColor: '#456882', color: '#f9f3ef'}} className="px-4 py-2 rounded-xl shadow hover:bg-[#1b3c53] hover:text-[#d2c1b6] transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
        </main>
      </div>
    </div>
    <Footer />
    </>
  );
}

    


export default SearchResult;