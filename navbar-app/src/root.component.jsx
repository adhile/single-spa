import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      background: '#333',
      color: '#fff',
      padding: '10px',
      fontFamily: 'sans-serif'
    }}>
      <h2>🧩 Navbar App</h2>
      <a href="/" style={{ marginRight: 10, color: '#fff' }}>Home</a>
      <a href="/dashboard" style={{ color: '#fff' }}>Dashboard</a>
    </nav>
  );
}
