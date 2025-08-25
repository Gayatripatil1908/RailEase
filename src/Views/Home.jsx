import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'

function Home() {
  return (
   <>
   <Navbar />

    <div className="pt-20">
      {/* Hero Section with background image and animation */}
      <section className="relative py-20 flex items-center justify-center" style={{backgroundImage: 'url(/src/assets/train.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0" style={{background: 'linear-gradient(90deg, #1b3c53cc 0%, #456882cc 100%)', zIndex: 0}}></div>
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in" style={{color: '#f9f3ef'}}>
            Plan Your Journey with <span style={{color: '#d2c1b6'}}>Ease</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-slide-up" style={{color: '#f9f3ef'}}>
            Book train tickets, check PNR status, and manage your bookings — all in one place.
          </p>
          {/* Search Form */}
          <div className="p-6 rounded-2xl shadow-2xl max-w-3xl mx-auto animate-fade-in" style={{backgroundColor: '#f9f3ef', color: '#1b3c53'}}>
            <div className="grid md:grid-cols-5 gap-4">
              <input type="text" placeholder="From" className="p-2 border rounded focus:ring-2 transition" style={{borderColor: '#456882'}} />
              <input type="text" placeholder="To" className="p-2 border rounded focus:ring-2 transition" style={{borderColor: '#456882'}} />
              <input type="date" className="p-2 border rounded focus:ring-2 transition" style={{borderColor: '#456882'}} />
              <select className="p-2 border rounded focus:ring-2 transition" style={{borderColor: '#456882'}}>
                <option>Class</option>
                <option>Sleeper</option>
                <option>AC</option>
                <option>Chair Car</option>
              </select>
              <a href="/search" style={{textDecoration: 'none'}}>
                <button className="font-semibold py-2 px-4 rounded transition duration-300 animate-bounce" style={{backgroundColor: '#456882', color: '#f9f3ef'}}>
                  Search
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes with improved hover effect and palette */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10" style={{color: '#1b3c53'}}>
          Popular Train Routes
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Delhi → Mumbai", "Bangalore → Hyderabad", "Pune → Goa", "Kolkata → Patna"].map(
            (route, i) => (
              <div key={i} className="shadow-md rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition duration-300" style={{backgroundColor: '#f9f3ef', color: '#1b3c53'}}>
                <h3 className="text-xl font-semibold mb-4">{route}</h3>
                <button className="py-2 px-4 rounded transition duration-300" style={{backgroundColor: '#456882', color: '#f9f3ef'}}>
                  Quick Book
                </button>
              </div>
            )
          )}
        </div>
      </section>

      {/* Special Offers with animation */}
      <section className="py-16" style={{backgroundColor: '#d2c1b6'}}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10" style={{color: '#1b3c53'}}>Special Discounts & Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "20% Off on First Booking 🎉",
              "Instant PNR Status Checker 🔍",
              "Easy Cancellations & Refunds 💳",
              "QR Code Tickets 📱",
            ].map((offer, i) => (
              <div key={i} className="p-6 rounded-xl shadow hover:scale-105 hover:shadow-2xl transition duration-300 animate-fade-in" style={{backgroundColor: '#f9f3ef', color: '#1b3c53'}}>
                <p className="text-lg font-medium">{offer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RailEase */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10" style={{color: '#1b3c53'}}>Why Choose RailEase?</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "⚡", text: "Fast Booking" },
            { icon: "🔒", text: "Secure Payments" },
            { icon: "🌍", text: "Multi-language Support" },
            { icon: "📲", text: "Mobile-Friendly" },
          ].map((item, i) => (
            <div key={i} className="shadow-md p-6 rounded-xl hover:scale-105 hover:shadow-2xl transition duration-300 animate-fade-in" style={{backgroundColor: '#f9f3ef', color: '#1b3c53'}}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16" style={{backgroundColor: '#456882'}}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10" style={{color: '#f9f3ef'}}>What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amit S.",
                text: "RailEase made booking so simple and quick! Highly recommended.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Priya K.",
                text: "PNR status updates are instant. The UI is beautiful and easy to use.",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Rahul T.",
                text: "Best railway app I’ve used. Secure payments and great offers!",
                avatar: "https://randomuser.me/api/portraits/men/65.jpg"
              }
            ].map((user, i) => (
              <div key={i} className="p-8 rounded-xl shadow hover:scale-105 transition duration-300 animate-fade-in" style={{backgroundColor: '#f9f3ef', color: '#1b3c53'}}>
                <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <p className="italic mb-2">"{user.text}"</p>
                <p className="font-bold" style={{color: '#456882'}}>{user.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with animation and palette */}
      <section className="py-16" style={{backgroundColor: '#1b3c53'}}>
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{color: '#f9f3ef'}}>
            Start your journey today with <span style={{color: '#d2c1b6'}}>RailEase</span>
          </h2>
          <p className="text-lg mb-8 animate-slide-up" style={{color: '#f9f3ef'}}>
            India’s next-gen railway booking platform designed for you.
          </p>
          <button className="font-semibold py-3 px-6 rounded-xl shadow transition duration-300 animate-bounce" style={{backgroundColor: '#456882', color: '#f9f3ef'}}>
            Book Your Ticket Now →
          </button>
        </div>
      </section>

      
      
    </div>

    <Footer />
  

   
   </>
  )
}

export default Home