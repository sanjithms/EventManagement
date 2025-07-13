import { useState, useEffect } from 'react';
import './AddEvent.css';

export default function AddEvent() {
  const [events, setEvents] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('events') || '[]');
    return saved;
  });

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [venue, setVenue] = useState('');
  const [address, setAddress] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (!imageFile) {
      setImagePreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  // Clean expired events based on start time
  useEffect(() => {
    const clean = () => {
      const now = new Date();
      const saved = JSON.parse(localStorage.getItem('events') || '[]');
      const filtered = saved.filter(e => new Date(`${e.date}T${e.time}`) > now);
      setEvents(filtered);
      localStorage.setItem('events', JSON.stringify(filtered));
    };
    clean();
    const id = setInterval(clean, 60000);
    return () => clearInterval(id);
  }, []);

  const add = e => {
    e.preventDefault();
    if (!title || !date || !time) return alert('Title, Date & Time required');
    console.log("Form submitted:", { title, date, time });
    const newEvt = {
      id: Date.now(),
      title,
      description: desc,
      date,
      time,
      endTime,
      venue,
      address,
      image: imagePreview,
    };
    const updated = [...events, newEvt];
    setEvents(updated);
    localStorage.setItem('events', JSON.stringify(updated));
    setTitle(''); setDesc(''); setDate(''); setTime('');
    setEndTime(''); setVenue(''); setAddress(''); setImageFile(null);
  };

  const del = id => {
    const filtered = events.filter(e => e.id !== id);
    setEvents(filtered);
    localStorage.setItem('events', JSON.stringify(filtered));
  };

  return (
    <div className="add-event">
      <h2>Add Event</h2>
      <form onSubmit={add}>
       <input placeholder="Title*" value={title} onChange={e => setTitle(e.target.value)} required />
  <textarea placeholder="Description*" value={desc} onChange={e => setDesc(e.target.value)} required />
  <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
  <input type="time" className="time-input" value={time} onChange={e => setTime(e.target.value)} required />
  <input type="time" className="time-input" value={endTime} onChange={e => setEndTime(e.target.value)} required />
  <input placeholder="Venue*" value={venue} onChange={e => setVenue(e.target.value)} required />
  <input placeholder="Address*" value={address} onChange={e => setAddress(e.target.value)} required />
  <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} required />
        {imagePreview && (
          <div className="img-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
        <button type="submit">Add Event</button>
      </form>

      <h3>Upcoming Events</h3>
      <ul className="events-list">
        {events.map(e => (
          <li key={e.id}>
            {e.image && <img src={e.image} alt={e.title} className="thumb" />}
            <div className="info">
              <h4>Title:{e.title}</h4>
              <p>Description:{e.description}</p>
              <span>Date&Time:{e.date} @ {e.time}{e.endTime ? ` - ${e.endTime}` : ''}</span>
              {(e.venue || e.address) && <address>Venu:{e.venue} <br />Address:{e.address}</address>}
            </div>
            <button className="delete-btn" onClick={() => del(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
