import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("bookings");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setBookings(parsed);
      }
    } catch (e) {
      console.error("Failed to load bookings:", e);
    }
  }, []);

  // Persist bookings to localStorage
  const persist = (next) => {
    try {
      localStorage.setItem("bookings", JSON.stringify(next));
    } catch (e) {
      console.error("Failed to save bookings:", e);
    }
  };

  const handleCancel = (id) => {
    const next = bookings.filter((b) => b.id !== id);
    setBookings(next);
    persist(next);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 px-4 md:px-8 bg-gradient-to-b from-[#f5f7fb] to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-[#1b3c53]">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md text-center">
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">You have no bookings yet.</p>
            <Link to="/search" className="inline-block px-4 py-2 bg-[#456882] text-white rounded-md hover:bg-[#2f5a6b]">
              Search Trains
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-semibold text-[#1b3c53]">{b.trainName || b.train || '—'}</div>
                    <div className="text-sm text-gray-500">PNR: <span className="font-medium text-gray-800 dark:text-gray-100">{b.pnr || 'N/A'}</span></div>
                  </div>

                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <div>From: <span className="font-medium">{b.from || b.source || '—'}</span> → To: <span className="font-medium">{b.to || b.destination || '—'}</span></div>
                    <div>Journey Date: <span className="font-medium">{b.date || b.journeyDate || '—'}</span></div>
                    <div>Passengers: <span className="font-medium">{b.passengers ? b.passengers.join(', ') : b.passengerCount || 1}</span></div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-3">
                  <div className="text-right text-sm text-gray-600 dark:text-gray-300">
                    <div className="font-semibold text-lg">₹{b.fare ?? b.price ?? '—'}</div>
                    <div className={`mt-1 ${b.status === 'Cancelled' ? 'text-red-500' : 'text-green-600'}`}>{b.status || 'Confirmed'}</div>
                  </div>

                  <div>
                    {b.status !== 'Cancelled' ? (
                      <button onClick={() => handleCancel(b.id)} className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                        Cancel
                      </button>
                    ) : (
                      <button disabled className="px-3 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed">
                        Cancelled
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>

      <Footer />
    </>
  );
}