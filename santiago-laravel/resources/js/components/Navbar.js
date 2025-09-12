import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,.07)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0.5rem 0',
      marginBottom: '2rem'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        position: 'relative',
      }}>
        <span style={{
          fontWeight: 700,
          fontSize: '1.3rem',
          color: '#3182ce',
          letterSpacing: '1px',
          flex: '0 0 auto',
        }}>
          Santiago Art
        </span>
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '2rem',
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}>
            <li><Link style={navLinkStyle} to="/">Home</Link></li>
            <li><Link style={navLinkStyle} to="/about">About Us</Link></li>
            <li><Link style={navLinkStyle} to="/portfolio">Portfolio</Link></li>
            <li><Link style={navLinkStyle} to="/contact">Contact Us</Link></li>
            <li><Link style={navLinkStyle} to="/artworks">Artworks</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: 'none',
  color: '#2d3748',
  fontWeight: 600,
  fontSize: '1.08rem',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  transition: 'background 0.2s, color 0.2s',
};
