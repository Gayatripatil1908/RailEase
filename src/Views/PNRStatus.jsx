
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

// SVG Animated Train Icon
const TrainIcon = () => (
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
    <rect x="10" y="15" width="60" height="20" rx="8" fill="#2563eb" />
    <circle cx="20" cy="35" r="5" fill="#333" />
    <circle cx="60" cy="35" r="5" fill="#333" />
    <rect x="55" y="10" width="10" height="10" rx="3" fill="#60a5fa" />
    <rect x="15" y="10" width="10" height="10" rx="3" fill="#60a5fa" />
  </svg>
);

// Static Journey Map (Demo)
const JourneyMap = ({ from, to }) => (
  <div className="flex items-center justify-center gap-2 mt-2 mb-4">
    <span className="font-semibold text-blue-700">{from}</span>
    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="12" x2="55" y2="12" stroke="#2563eb" strokeWidth="3" />
      <circle cx="5" cy="12" r="4" fill="#2563eb" />
      <circle cx="55" cy="12" r="4" fill="#2563eb" />
      <polygon points="50,8 60,12 50,16" fill="#2563eb" />
    </svg>
    <span className="font-semibold text-blue-700">{to}</span>
  </div>
);

// Progress Bar for Status
const StatusBar = ({ status }) => {
  let color = "bg-green-500";
  let percent = 100;
  if (status.includes("WL")) {
    color = "bg-red-500";
    percent = 30;
  } else if (status.includes("RAC")) {
    color = "bg-yellow-500";
    percent = 60;
  }
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
      <div className={`${color} h-3 rounded-full`} style={{ width: `${percent}%` }}></div>
    </div>
  );
};


  
const PNRStatus = () => {
  const [pnr, setPnr] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [recent, setRecent] = useState([]);

  // Dummy data for demonstration
  const dummyPNRData = {
    "1234567890": {
      trainName: "Shatabdi Express",
      trainNo: "12001",
      journeyDate: "18-Aug-2025",
      from: "Pune",
      to: "Mumbai",
      passenger: [
        { name: "Rahul Sharma", age: 28, status: "CNF" },
        { name: "Priya Mehta", age: 25, status: "WL/2 → CNF" },
      ],
    },
    "9876543210": {
      trainName: "Rajdhani Express",
      trainNo: "12951",
      journeyDate: "20-Aug-2025",
      from: "Delhi",
      to: "Mumbai",
      passenger: [
        { name: "Amit Verma", age: 35, status: "RAC 15" },
        { name: "Neha Verma", age: 32, status: "RAC 16" },
      ],
    },
  };

  useEffect(() => {
    const stored = localStorage.getItem("recentPNRs");
    if (stored) setRecent(JSON.parse(stored));
  }, []);

  const handleCheckStatus = () => {
    if (!pnr || pnr.length !== 10) {
      setError("❌ Please enter a valid 10-digit PNR number.");
      setStatus(null);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setError("");
      if (dummyPNRData[pnr]) {
        setStatus(dummyPNRData[pnr]);
        // Save to recent
        let updated = [pnr, ...recent.filter((r) => r !== pnr)].slice(0, 5);
        setRecent(updated);
        localStorage.setItem("recentPNRs", JSON.stringify(updated));
      } else {
        setError("⚠️ No record found for this PNR number.");
        setStatus(null);
      }
      setLoading(false);
    }, 1200);
  };

  const handleShare = () => {
    if (status) {
      const text = `PNR Status for ${pnr}: ${status.trainName} (${status.trainNo}), ${status.journeyDate}, ${status.from} ➝ ${status.to}`;
      navigator.clipboard.writeText(text);
      alert("PNR status copied to clipboard!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col items-center p-6 relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-400 to-blue-200 opacity-30 z-0" />
        <div className="z-10 w-full flex flex-col items-center">
          <div className="mt-24 mb-2 flex flex-col items-center">
            <TrainIcon />
            <h1 className="text-4xl font-extrabold text-blue-700 mb-2 tracking-wide drop-shadow">PNR Status</h1>
            <p className="text-gray-700 mb-4 text-lg">Enter your 10-digit PNR number to know your booking status instantly.</p>
          </div>

          {/* Input */}
          <div className="flex gap-3 mb-2">
            <input
              type="text"
              value={pnr}
              onChange={(e) => setPnr(e.target.value)}
              placeholder="Enter PNR Number"
              className="border-2 border-blue-300 rounded-lg p-3 w-72 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
              maxLength={10}
            />
            <button
              onClick={handleCheckStatus}
              className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition font-semibold text-lg"
              disabled={loading}
            >
              {loading ? "Checking..." : "Check Status"}
            </button>
          </div>

          {/* Recent Searches */}
          {recent.length > 0 && (
            <div className="mb-4 w-full max-w-md">
              <h4 className="text-sm text-blue-600 font-semibold mb-1">Recent Searches:</h4>
              <div className="flex gap-2 flex-wrap">
                {recent.map((r, i) => (
                  <button
                    key={r}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full shadow hover:bg-blue-200 text-sm"
                    onClick={() => { setPnr(r); handleCheckStatus(); }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Error message */}
          {error && <p className="text-red-600 mt-2 font-semibold">{error}</p>}

          {/* Status Result */}
          {status && (
            <div className="mt-8 w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 border border-blue-100 relative">
              <button
                className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded shadow hover:bg-blue-200 text-sm"
                onClick={handleShare}
              >Share</button>
              <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                <TrainIcon />
                {status.trainName} <span className="text-base font-normal">({status.trainNo})</span>
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>Journey Date:</strong> {status.journeyDate}
              </p>
              <JourneyMap from={status.from} to={status.to} />

              <h3 className="text-lg font-semibold mt-4 mb-2">Passenger Details:</h3>
              <ul className="space-y-3">
                {status.passenger.map((p, index) => (
                  <li
                    key={index}
                    className="border rounded-xl p-4 bg-gradient-to-r from-blue-50 to-white flex flex-col md:flex-row justify-between items-center shadow"
                  >
                    <span className="font-medium text-blue-800 text-lg">
                      {p.name} <span className="text-gray-500">(Age: {p.age})</span>
                    </span>
                    <div className="flex flex-col items-end">
                      <span className={`font-bold ${p.status.includes("CNF") ? "text-green-600" : p.status.includes("RAC") ? "text-yellow-600" : "text-red-600"}`}>
                        {p.status}
                      </span>
                      <StatusBar status={p.status} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Disclaimer & Tips */}
          <div className="mt-8 w-full max-w-2xl text-xs text-gray-500 text-center">
            <p>⚠️ Disclaimer: This is a demo version of RailEase. Data shown is sample only.</p>
            <div className="mt-2 text-blue-700 font-semibold">💡 Travel Tips: Arrive 30 min early | Carry valid ID | Check platform info</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PNRStatus;

 