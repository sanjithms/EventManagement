import { useState, useEffect } from "react";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : [];
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    const cleanup = () => {
      const now = new Date();
      setEvents((evts) =>
        evts.filter((e) => new Date(`${e.date}T${e.time}`) > now)
      );
    };
    cleanup();
    const id = setInterval(cleanup, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const deleteEvent = (id) =>
    setEvents((evts) => evts.filter((e) => e.id !== id));

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="events">
      <h2>Event Details</h2>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.length ? (
          filtered.map((e) => (
            <li key={e.id}>
              <img src={e.image} alt={e.title} className="event-image" />
              <div className="evt-info">
                <h3>{e.title}</h3>
                <p>{e.description}</p>
                <span>
                  <strong>Date:</strong> {e.date}
                </span>
                <span>
                  <strong>Time:</strong> {e.time}
                  {e.endTime ? ` - ${e.endTime}` : ""}
                </span>
                {e.venue && (
                  <span>
                    <strong>Venue:</strong> {e.venue}
                  </span>
                )}
                {e.address && (
                  <span>
                    <strong>Address:</strong> {e.address}
                  </span>
                )}
              </div>
              <button className="delete-btn" onClick={() => deleteEvent(e.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No events found.</li>
        )}
      </ul>
    </div>
  );
}
