import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">MyEventApp</NavLink>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu toggle">
          <span className={open ? 'bar rotate1' : 'bar'} />
          <span className={open ? 'bar disappear' : 'bar'} />
          <span className={open ? 'bar rotate2' : 'bar'} />
        </button>

        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/events" onClick={() => setOpen(false)}>Event Details</NavLink></li>
          <li><NavLink to="/add" onClick={() => setOpen(false)}>Add Event</NavLink></li>
        </ul>
      </div>
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </nav>
);
}
