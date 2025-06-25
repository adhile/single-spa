import React from 'react';

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#333',
        color: '#fff',
        padding: '10px 20px',
        fontFamily: 'sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <span style={{ fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>
        🧩 Navbar App
      </span>
      <div>
        <a href="/" style={{ marginRight: 20, color: '#fff', textDecoration: 'none', fontSize: 16 }}>
          Home
        </a>
        <a href="/dashboard" style={{ color: '#fff', textDecoration: 'none', fontSize: 16 }}>
          Dashboard
        </a>
      </div>
    </nav>
  );
}
