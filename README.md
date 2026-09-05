# Snyman Says - Online Pharmacist Consultation Platform

## Overview
**Snyman Says** is a modern web application for scheduling and managing online pharmacist consultations with Chris Snyman. The platform features a sleek, professional design with multi-language support (English, Afrikaans, and Setswana).

## Features

✅ **Multi-Language Support** - English, Afrikaans, Setswana  
✅ **Consultation Booking** - Virtual (Zoom/WhatsApp) and In-Person options  
✅ **Time Slot Selection** - Available and booked slots management  
✅ **Medication Tracker** - Track prescription medications  
✅ **Payment Integration** - Multiple payment methods (Card, Zapper, Apple Pay, Samsung Pay)  
✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **Professional UI** - Dark theme with emerald accents  

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **JavaScript (ES6+)** - Programming language

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Ethanmagee-desighn/snyman-says.git
cd snyman-says
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```
The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
snyman-says/
├── src/
│   ├── App.jsx          # Main app component with all pages
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── README.md            # This file
```

## Pages & Sections

### 1. **Home**
Hero section with brand tagline and quick booking CTA

### 2. **About**
Information about Chris Snyman and qualifications

### 3. **Book Consultation**
- Select consultation type (Virtual/In-Person)
- Choose available time slots
- Payment method selection
- Real-time slot availability

### 4. **My Medications**
Track and manage prescription medications

### 5. **Contact**
Direct contact information:
- Phone: 083 393 0755
- Email: info@snymansays.co.za
- Location: Ifafi, Hartbeespoort

## Customization

### Changing Languages
Edit `translations` object in `src/App.jsx` to update or add languages.

### Modifying Colors
Update Tailwind config in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      dark: '#353E3A',
      darkLighter: '#2d3531',
    }
  }
}
```

### Adding Time Slots
Modify the `slots` state in `src/App.jsx`:
```js
const [slots, setSlots] = useState([
  { id: 1, time: "09:00 - 09:15", booked: false },
  // Add more slots...
]);
```

## Payment Integration

Currently using placeholder payment buttons for:
- Credit/Debit Card (PayFast)
- Zapper
- Apple Pay
- Samsung Pay

To integrate real payment processing, connect to your payment provider's API.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration for real bookings
- Email confirmation system
- Calendar integration
- SMS notifications
- Video consultation platform
- Patient records database
- Analytics dashboard

## License

MIT License - See LICENSE file for details

## Contact

**Chris Snyman - Professional Pharmacist**
- Phone: 083 393 0755
- Email: info@snymansays.co.za
- Location: Ifafi, Hartbeespoort

---

Built with ❤️ by Ethanmagee-desighn
