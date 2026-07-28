import React from 'react';

function App() {
  const offices = [
  {
    id: 1,
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: "/office.jpeg"
  },
  {
    id: 2,
    name: "Infosys",
    rent: 75000,
    address: "Bangalore",
    image: "/office.jpeg"
  },
  {
    id: 3,
    name: "TCS",
    rent: 45000,
    address: "Hyderabad",
    image: "/office.jpeg"
  },
  {
    id: 4,
    name: "Cognizant",
    rent: 90000,
    address: "Pune",
    image: "/office.jpeg"
  }
];

  const rentStyle = {
    color: office.rent <= 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Office Space , at Affordable Range</h1>

      <img src={office.image} alt="Office Space" style={{ width: '300px', margin: '20px 0' }} />

      <h2 style={{ fontWeight: 'bold' }}>Name: {office.name}</h2>
      <p style={rentStyle}>Rent: Rs. {office.rent}</p>
      <p style={{ fontWeight: 'bold' }}>Address: {office.address}</p>
    </div>
  );
}

export default App;
