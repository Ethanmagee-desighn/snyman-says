import React, { useState } from 'react';
import { Globe, Calendar, CreditCard, Shield, Phone, Mail, User, Clock, MapPin, Pill } from 'lucide-react';

// Translations Dictionary
const translations = {
  en: {
    brand: "SNYMAN SAYS",
    tagline: "Your aunt has opinions. I have a pharmacy degree.",
    subtagline: "A pharmacist who knows when to listen to Auntie... and when to step in.",
    aboutHeader: "Who is Chris Snyman?",
    aboutBio: "Chris Snyman is a trusted, qualified pharmacist dedicated to delivering professional health guidance. Whether reviewing daily prescription medication or offering consultation, Chris brings clarity to your health decisions.",
    navHome: "Home",
    navAbout: "About",
    navBook: "Book Consultation",
    navMeds: "My Medications",
    navContact: "Contact",
    bookTitle: "Schedule a Consultation",
    rate: "R50 per 15-minute slot",
    consultType: "Consultation Type",
    typeVirtual: "Virtual (Zoom / WhatsApp Video Call)",
    typeInPerson: "In-Person (Ifafi Location)",
    selectSlot: "Select Available Slot",
    slotBooked: "Booked",
    slotAvailable: "Available",
    medTrackerTitle: "Your Prescription Medications",
    medNamePlaceholder: "Medication Name & Dosage (e.g. Stilnox 10mg)",
    addMed: "Add to Profile",
    payTitle: "Complete Payment",
    payMethod: "Select Payment Method",
    paySuccess: "Slot reserved! Redirecting to secure portal...",
    contactHeader: "Get in Touch",
    phone: "083 393 0755",
    email: "info@snymansays.co.za",
    inPersonLoc: "In-Person Visits: Ifafi, Hartbeespoort"
  },
  af: {
    brand: "SNYMAN SAYS",
    tagline: "Jou tannie het opinies. Ek het 'n aptekersgraad.",
    subtagline: "'n Apteker wat weet wanneer om na Tannie te luister... en wanneer om in te gryp.",
    aboutHeader: "Wie is Chris Snyman?",
    aboutBio: "Chris Snyman is 'n gekwalifiseerde, betroubare apteker wat toegewyd is daaraan om professionele gesondheidsadvies te verskaf. Of dit gaan oor die hersiening van jou voorgeskrewe medikasie of 'n raadskol, Chris bring duidelikheid.",
    navHome: "Tuis",
    navAbout: "Oor Chris",
    navBook: "Bespreek Konsultasie",
    navMeds: "My Medikasie",
    navContact: "Kontak",
    bookTitle: "Bespreek 'n Konsultasie",
    rate: "R50 per 15-minute gleuf",
    consultType: "Tipe Konsultasie",
    typeVirtual: "Virtueel (Zoom / WhatsApp Video Call)",
    typeInPerson: "In Persoon (Ifafi Ligging)",
    selectSlot: "Kies Beskikbare Tydsgleuf",
    slotBooked: "Reeds Bespreek",
    slotAvailable: "Beskikbaar",
    medTrackerTitle: "Jouself se Voorgeskrewe Medikasie",
    medNamePlaceholder: "Medikasienaam en Dosis (bv. Stilnox 10mg)",
    addMed: "Voeg toe aan profiel",
    payTitle: "Voltooi Betaling",
    payMethod: "Kies Betalingsmetode",
    paySuccess: "Plek gereserveer! U word aangestuur na die betaalpoort...",
    contactHeader: "Kontak Ons",
    phone: "083 393 0755",
    email: "info@snymansays.co.za",
    inPersonLoc: "In-Persoon Konsultasies: Ifafi, Hartbeespoort"
  },
  tn: {
    brand: "SNYMAN SAYS",
    tagline: "Mmamogolo wa gago o na le megopolo. Nna ke na le dikrii ya go alafa.",
    subtagline: "Mmoreki wa melemo yo o kitsi leng go reetsa Mmamogolo... le leng go tsenelela.",
    aboutHeader: "Chris Snyman ke mang?",
    aboutBio: "Chris Snyman ke mofephedi wa melemo yo o nang le bokgoni le go tshepagala. Go tswa go tlhatlhobo ya melemo ya gago go ya go tshedimosetso e e kgethegileng.",
    navHome: "Gae",
    navAbout: "Ka ga Chris",
    navBook: "Buka Therisano",
    navMeds: "Melemo ya me",
    navContact: "Ikgokaganye",
    bookTitle: "Buka Therisano",
    rate: "R50 ka metsotso e 15",
    consultType: "Mofuta wa Therisano",
    typeVirtual: "Inthanete (Zoom / WhatsApp Video Call)",
    typeInPerson: "Ka sebele (Lefelo la Ifafi)",
    selectSlot: "Tlhopha Nako e e Leng Teng",
    slotBooked: "E tswetswe",
    slotAvailable: "E teng",
    medTrackerTitle: "Melemo ya gago ya Kaelo",
    medNamePlaceholder: "Leina la Moolafhi (sekai: Stilnox 10mg)",
    addMed: "Tsenya mo Profaleng",
    payTitle: "Duela",
    payMethod: "Tlhopha Mokgwa wa go Duela",
    paySuccess: "Phetolo e dirilwe! Re go isa go setheo sa tefelo...",
    contactHeader: "Ikgokaganye le Rona",
    phone: "083 393 0755",
    email: "info@snymansays.co.za",
    inPersonLoc: "Ditherisano ka sebele: Ifafi, Hartbeespoort"
  }
};

export default function SnymanSaysApp() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('home');
  const [bookingType, setBookingType] = useState('virtual');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [meds, setMeds] = useState([]);
  const [newMed, setNewMed] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(false);

  const t = translations[lang];

  // Dummy slots state
  const [slots, setSlots] = useState([
    { id: 1, time: "09:00 - 09:15", booked: false },
    { id: 2, time: "09:20 - 09:35", booked: true },
    { id: 3, time: "10:00 - 10:15", booked: false },
    { id: 4, time: "10:30 - 10:45", booked: false },
    { id: 5, time: "14:00 - 14:15", booked: true },
  ]);

  const handleAddMed = (e) => {
    e.preventDefault();
    if (!newMed) return;
    setMeds([...meds, newMed]);
    setNewMed('');
  };

  const handleBooking = (paymentGateway) => {
    if (!selectedSlot) return;
    setPaymentStatus(true);
    setTimeout(() => {
      setSlots(slots.map(s => s.id === selectedSlot ? { ...s, booked: true } : s));
      setPaymentStatus(false);
      setSelectedSlot(null);
      alert(`${t.paySuccess} (${paymentGateway})`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#353E3A] text-white font-sans flex flex-col justify-between">
      {/* Header & Navigation */}
      <header className="border-b border-gray-600 bg-[#2d3531] p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-white text-[#353E3A] p-2 rounded-full font-bold text-xl">S+</div>
            <div>
              <h1 className="text-xl font-extrabold tracking-wide">{t.brand}</h1>
              <p className="text-xs text-gray-300">Online Pharmacist Consultations</p>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <button onClick={() => setActiveTab('home')} className={`hover:text-emerald-400 ${activeTab === 'home' ? 'text-emerald-400 underline' : ''}${t.navHome}</button>
            <button onClick={() => setActiveTab('about')} className={`hover:text-emerald-400 ${activeTab === 'about' ? 'text-emerald-400 underline' : ''}`}>{t.navAbout}</button>
            <button onClick={() => setActiveTab('book')} className={`hover:text-emerald-400 ${activeTab === 'book' ? 'text-emerald-400 underline' : ''}`}>{t.navBook}</button>
            <button onClick={() => setActiveTab('meds')} className={`hover:text-emerald-400 ${activeTab === 'meds' ? 'text-emerald-400 underline' : ''}`}>{t.navMeds}</button>
            <button onClick={() => setActiveTab('contact')} className={`hover:text-emerald-400 ${activeTab === 'contact' ? 'text-emerald-400 underline' : ''}`}>{t.navContact}</button>
          </nav>

          {/* Language Selector Filter */}
          <div className="flex items-center gap-2 bg-[#353E3A] px-3 py-1.5 rounded-lg border border-gray-500">
            <Globe size={16} />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white text-sm focus:outline-none cursor-pointer"
            >
              <option value="en" className="bg-[#353E3A]">English</option>
              <option value="af" className="bg-[#353E3A]">Afrikaans</option>
              <option value="tn" className="bg-[#353E3A]">Setswana</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto w-full p-6 flex-1">
        {/* HOME / HERO */}
        {activeTab === 'home' && (
          <div className="text-center py-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">{t.tagline}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 italic">{t.subtagline}</p>
            
            <div className="bg-[#2d3531] p-8 rounded-2xl border border-gray-600 max-w-lg w-full shadow-2xl mb-8">
              <h3 className="text-2xl font-bold mb-2">Chris Snyman</h3>
              <p className="text-sm text-emerald-400 mb-4">Professional Pharmacist Consultation</p>
              <p className="text-sm text-gray-300 mb-6">{t.aboutBio}</p>
              <button 
                onClick={() => setActiveTab('book')}
                className="w-full bg-white text-[#353E3A] font-bold py-3 rounded-xl hover:bg-emerald-400 hover:text-white transition"
              >
                {t.navBook} ({t.rate})
              </button>
            </div>
          </div>
        )}

        {/* ABOUT CHRIS */}
        {activeTab === 'about' && (
          <div className="bg-[#2d3531] p-8 rounded-2xl border border-gray-600">
            <h2 className="text-3xl font-bold mb-4">{t.aboutHeader}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{t.aboutBio}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-3 bg-[#353E3A] p-4 rounded-xl">
                <Shield className="text-emerald-400" />
                <span>Qualified & Registered Pharmacist</span>
              </div>
              <div className="flex items-center gap-3 bg-[#353E3A] p-4 rounded-xl">
                <User className="text-emerald-400" />
                <span>Personalized 1-on-1 Patient Care</span>
              </div>
            </div>
          </div>
        )}

        {/* BOOKING & PAYMENT */}
        {activeTab === 'book' && (
          <div className="bg-[#2d3531] p-8 rounded-2xl border border-gray-600 space-y-6">
            <div>
              <h2 className="text-2xl font-bold">{t.bookTitle}</h2>
              <p className="text-emerald-400 text-sm font-semibold">{t.rate}</p>
            </div>

            {/* Type selection */}
            <div>
              <label className="block text-sm font-medium mb-2">{t.consultType}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  onClick={() => setBookingType('virtual')}
                  className={`p-4 rounded-xl border text-left flex items-center gap-3 ${bookingType === 'virtual' ? 'border-emerald-400 bg-[#353E3A]' : 'border-gray-600'}`}
                >
                  <Clock size={20} />
                  <span>{t.typeVirtual}</span>
                </button>
                <button 
                  onClick={() => setBookingType('in-person')}
                  className={`p-4 rounded-xl border text-left flex items-center gap-3 ${bookingType === 'in-person' ? 'border-emerald-400 bg-[#353E3A]' : 'border-gray-600'}`}
                >
                  <MapPin size={20} />
                  <span>{t.typeInPerson}</span>
                </button>
              </div>
            </div>

            {/* Slots selection */}
            <div>
              <label className="block text-sm font-medium mb-2">{t.selectSlot}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {slots.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={slot.booked}
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`p-3 rounded-xl border text-center text-sm font-medium transition ${
                      slot.booked 
                        ? 'bg-gray-700 border-gray-700 text-gray-500 cursor-not-allowed' 
                        : selectedSlot === slot.id 
                          ? 'bg-emerald-500 text-white border-emerald-400' 
                          : 'bg-[#353E3A] border-gray-600 hover:border-emerald-400'
                    }`}
                  >
                    {slot.time}
                    <span className="block text-xs mt-1">
                      {slot.booked ? t.slotBooked : t.slotAvailable}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Options */}
            {selectedSlot && (
              <div className="pt-6 border-t border-gray-600 space-y-4">
                <h3 className="font-bold text-lg">{t.payTitle} (R50.00)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button onClick={() => handleBooking('PayFast / Card')} className="bg-white text-black p-3 rounded-xl font-bold text-sm hover:bg-gray-200">
                    Credit / Debit Card
                  </button>
                  <button onClick={() => handleBooking('Zapper')} className="bg-blue-600 text-white p-3 rounded-xl font-bold text-sm hover:bg-blue-500">
                    Zapper
                  </button>
                  <button onClick={() => handleBooking('Apple Pay')} className="bg-black border border-gray-500 text-white p-3 rounded-xl font-bold text-sm hover:bg-gray-900">
                    Apple Pay
                  </button>
                  <button onClick={() => handleBooking('Samsung Pay')} className="bg-blue-900 text-white p-3 rounded-xl font-bold text-sm hover:bg-blue-800">
                    Samsung Pay
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* MEDICATION LOG */}
        {activeTab === 'meds' && (
          <div className="bg-[#2d3531] p-8 rounded-2xl border border-gray-600 space-y-6">
            <div className="flex items-center gap-3">
              <Pill className="text-emerald-400" />
              <h2 className="text-2xl font-bold">{t.medTrackerTitle}</h2>
            </div>
            
            <form onSubmit={handleAddMed} className="flex gap-2">
              <input 
                type="text"
                value={newMed}
                onChange={(e) => setNewMed(e.target.value)}
                placeholder={t.medNamePlaceholder}
                className="flex-1 bg-[#353E3A] border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-emerald-400"
              />
              <button type="submit" className="bg-emerald-500 text-white font-bold px-6 py-2 rounded-xl hover:bg-emerald-400">
                {t.addMed}
              </button>
            </form>

            <ul className="space-y-2 pt-4">
              {meds.length === 0 ? (
                <p className="text-gray-400 text-sm italic">No prescription medications logged yet.</p>
              ) : (
                meds.map((med, idx) => (
                  <li key={idx} className="bg-[#353E3A] p-3 rounded-xl border border-gray-600 flex justify-between items-center">
                    <span>{med}</span>
                    <span className="text-xs text-emerald-400">Logged</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}

        {/* CONTACT US */}
        {activeTab === 'contact' && (
          <div className="bg-[#2d3531] p-8 rounded-2xl border border-gray-600 space-y-6">
            <h2 className="text-2xl font-bold">{t.contactHeader}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-emerald-400" />
                <a href="tel:0833930755" className="hover:underline">{t.phone}</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-emerald-400" />
                <a href="mailto:info@snymansays.co.za" className="hover:underline">{t.email}</a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-emerald-400" />
                <span>{t.inPersonLoc}</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-600 bg-[#2d3531] py-6 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Snyman Says. All rights reserved.</p>
      </footer>
    </div>
  );
}
