# TravelTrucks

## Overview

This project is a frontend application for "TravelTrucks," a company offering camper rentals. The application provides a user-friendly interface to browse, filter, and favorite available campers, view detailed information, and make bookings.

The application features:
- A homepage with a banner and primary call-to-action.
- A catalog of vehicles with filtering options.
- A detailed page for each camper, including descriptions, galleries, reviews, and a booking form.
- A favorites page for saved vehicles.

The backend API for handling data is available at:  
[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers).

### Main Routes
- `/` – Homepage.
- `/catalog` – Camper catalog.
- `/catalog/:id` – Camper details page.
- `/catalog/:id/features` – Camper features section.
- `/catalog/:id/reviews` – User reviews section.
- `/favorites` – Favorites page.

---

## Tech Stack

The project is built using:
- **React** (bundled with Vite)
- **Redux** for state management.
- **React Router** for routing.
- **Redux Toolkit** for optimized Redux development.
- **Axios** for API interactions.
- **CSS Modules** and **Styled-components** for styling components.
- **React-icons** for icons.
- **React-hot-toast** for notifications.
- **React-select** for custom select components.
- **React-datepicker** for customizable booking date input selection.
- **Redux Persist** for state persistence across sessions.

---

## Features

- **Filtering:** Backend-powered filtering by location, camper type, air conditioning, etc.
- **Favorites:** Save campers to a favorites list with persistent storage between page reloads.
- **Pagination:** A "Load More" button for fetching additional items.
- **Details:** View camper specs, photo galleries, and user reviews.
- **Booking:** A form for booking campers with confirmation on success.

---

## Design

### Home Page

![Home Page](/public/images/home-page-screenshot.jpg)

### Catalog Page

![Catalog Page](/public/images/catalog-page-screenshot.jpg)

### CamperDetail Page

![CamperDetail Page](/public/images/camper-detail-page-screenshot.jpg)


### Mockup
The design follows provided [mockups](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&t=wWUj9PeSd7v1KZ5q-1). While not mandatory, mobile responsiveness has been implemented for better usability.

---

## Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/artem-yaremchuk/travel-trucks.git
   
2. Navigate to the project directory:
   ```bash
   cd travel-trucks

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm start

## Author

This project was developed following best practices in frontend development.  
**Author:** [Artem Yaremchuk](https://github.com/Artem-Yaremchuk)

For questions or feedback, feel free to reach out!
