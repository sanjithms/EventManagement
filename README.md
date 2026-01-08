# 🗓️ Event Management System

A robust, full-featured web application built with **React.js** designed to streamline the organization, scheduling, and management of events. This system offers a seamless experience for both event organizers and attendees through a modern, responsive interface.

---

## 🚀 Key Features

### 🔹 User Experience
* **Dynamic Event Dashboard:** A centralized hub to view, filter, and search for upcoming events.
* **Detailed Event Pages:** Individual views for every event including descriptions, timing, and location.
* **Responsive UI:** Optimized for all screen sizes, from high-res desktops to mobile devices.
* **Real-time Interaction:** Smooth transitions and state management for a modern "app-like" feel.

### 🔹 Management Tools
* **CRUD Operations:** Create, Read, Update, and Delete event listings.
* **Category Filtering:** Easily sort events by type (e.g., Workshops, Concerts, Seminars).
* **Date Tracking:** Integrated scheduling to prevent overlapping events.

---

## 📂 Project Architecture

The project utilizes a modular directory structure to ensure scalability and maintainability:

* **`src/assets/`**: Contains static assets including brand logos (`logo.svg`), background images, and custom icons.
* **`src/components/`**: Atomic UI components such as `Navbar`, `EventCard`, `Button`, and `Modal` for high reusability.
* **`src/pages/`**: High-level page components (e.g., `Home`, `CreateEvent`, `EventDetails`) that manage their own state.
* **`App.js`**: The core component managing global state and **React Router** configurations.
* **`index.js`**: The DOM entry point for the React virtual DOM.
* **`App.css` / `index.css`**: Modular CSS architecture including CSS variables for consistent branding and theming.

---

## 🛠️ Technical Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Frontend UI Library |
| **React Router** | Client-side Navigation |
| **CSS3 / Modules** | Custom Styling & Layouts |
| **Jest / RTL** | Unit & Integration Testing |
| **Web Vitals** | Performance Tracking & Metrics |

---
---

## 🖥️ Application Interface

To provide a clear understanding of the user experience, here is a visual overview of the **Event Management System** in action.

### 🖼️ Platform Preview

<p align="center">
  <img width="100%" alt="Event Management System Main Dashboard" src="https://github.com/user-attachments/assets/c1dad5d0-91b6-4f3f-9595-3af1be593a4d" />
  <br>
  <em>Figure 1: Main Dashboard showing event listings and navigation.</em>
</p>

---

## 🔍 Key UI Highlights

| Feature | Description |
| :--- | :--- |
| **Hero Section** | A visually engaging header that highlights featured or upcoming events. |
| **Event Grid** | A clean, card-based layout displaying event dates, titles, and descriptions. |
| **Navigation Bar** | Quick access to Home, About, and Event Management controls. |
| **Action Buttons** | Intuitive call-to-action buttons for "View Details" or "Register Now". |

---

## 📱 User Flow

1. **Discovery:** Users land on the homepage and browse the curated list of events.
2. **Filtering:** Use the navigation to find specific categories of gatherings.
3. **Engagement:** Click on specific event cards to view comprehensive details (Location, Time, Organizer).
4. **Management:** Administrators can use the backend logic to update or remove event listings.

---

## ⚙️ Installation & Local Development

### 1. Prerequisites
* Node.js (v16.x or higher)
* npm (v8.x or higher)

### 2. Setup
Clone the repository and install the dependencies:
```bash
git clone [https://github.com/sanjithms/EventManagement.git](https://github.com/sanjithms/EventManagement.git)
cd EventManagement
npm install
