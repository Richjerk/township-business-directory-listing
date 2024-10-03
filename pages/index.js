// src/pages/index.js
"use client";  // Mark this file as a Client Component

import { useState } from 'react';

export default function Home() {
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [location, setLocation] = useState(null);

  const handleBusinessSubmit = (e) => {
    e.preventDefault();
    console.log({
      businessName,
      businessDescription,
      businessAddress,
      businessPhone,
    });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    console.log({
      userName,
      userEmail,
      userPhone,
      location,
    });
  };

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Business Form */}
        <section>
          <h2>Business Registration</h2>
          <form onSubmit={handleBusinessSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
            <textarea
              placeholder="Business Description"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              required
            ></textarea>
            <input
              type="text"
              placeholder="Business Address"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Business Phone"
              value={businessPhone}
              onChange={(e) => setBusinessPhone(e.target.value)}
              required
            />
            <button type="submit">Register Business</button>
          </form>
        </section>

        {/* User Form */}
        <section>
          <h2>User Registration</h2>
          <form onSubmit={handleUserSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="User Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="User Phone"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              required
            />
            <button type="button" onClick={getGeoLocation}>
              Enable Geo-Tracking
            </button>
            {location && (
              <p>
                Latitude: {location.latitude}, Longitude: {location.longitude}
              </p>
            )}
            <button type="submit">Register User</button>
          </form>
        </section>

        {/* GPT Chatbot */}
        <section>
          <h2>Chatbot Assistance</h2>
          <p>
            Ask any question about local businesses or services, and our
            AI-driven chatbot will assist you!
          </p>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Connecting Local Businesses with Their Community.</p>
      </footer>
    </div>
  );
}
