// Write all the code here

import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import colorful from "../../assets/bg.png";


const Contact = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendClick = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  return (
    <div
      style={{
        backgroundImage: `url(${colorful})`, 
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '40px',
          borderRadius: '10px 70px 70px 10px',
          width: '800px',
          textAlign: 'center',
          height:"400px",
        }}
      >
    
        <h1>Contact Us</h1>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '10px', width: '100%', padding: '10px' }}
          />
        </div>
       
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px', width: '100%', padding: '10px' }}
          />
        </div>
        <div>
          <textarea
            placeholder="Your Feedback or message"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            style={{ marginBottom: '10px', width: '100%', padding: '10px' }}
          />
        </div>
        <button type="button" onClick={handleSendClick} style={{ padding: '10px', backgroundColor: '#DE3163', color: 'white', border: 'none', borderRadius: '5px', margin:"20px", width:"500px", textAlign:"center"}}>
          Send
        </button>

        <Popup open={popupOpen} onClose={closePopup} >
          <div >
            <h2 onClick={closePopup}style={{ padding: '10px', backgroundColor: 'white', color: 'red', border: 'none', borderRadius: '5px', margin:"20px"}} >Thank you for your feedback!</h2>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Contact;

