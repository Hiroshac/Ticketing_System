import React from 'react'
import { useEffect, useState } from 'react';
// import './Tokenlocal.css';

export const Tokenlocal = () => {
    const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState();
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const [name, setName] = useState();
  const [nic, setNic] = useState();
  const [email, setEmail] = useState();
  const [contactno, setContactno] = useState();
  const [address, setAddress] = useState();

   // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
    //   setItem(items);
      setName(items.fullname);
      setNic(items.nic);
      setAddress(items.address);
      setEmail(items.email);
      setContactno(items.contactno);
    }
   
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);
  
  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    const item = {
        name,
        email,
        nic
    }
    setWord(item);
  }
  
  return (
    <div>
         <div className="mt-3 text-center" style={{width : "20%",marginLeft:"40%"}}>
      {/* <h1>QR Code Generator</h1> */}
      <div className="input-box">
        <div className="gen">
          {/* <input type="text" 
            placeholder="Enter text to encode" /> */}
          <button className="button btn" 
            onClick={handleClick}>
            Generate Token
          </button>
        </div>
        {/* <div className="extra">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="200" max="600"
           value={size} onChange={(e) => 
           {setSize(e.target.value)}} />
        </div> */}
      </div>
      <div className="output-box mt-3">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
    </div>
  )
}
