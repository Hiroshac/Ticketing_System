import { useEffect, useState } from "react";
// import './App.css';

export const Visitorlog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [country, setCountry] = useState("");
  const [exd, setExd] = useState("");

  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState();
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    const qdata = {
      name,
      country,
      contactno,
      exd
    }
    setWord(qdata);
  }

  return (
    <div className="App container" style={{marginLeft:"30%"}}>
      {/* <h1>QR Code Generator</h1> */}
      <div className="input-box">
        <div className="gen">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h3 className="text-center p-3 mt-4">Register</h3>
            <form onSubmit={handleClick}>
              <div className="form-outline mb-1">
                <label className="form-label" for="form3Example3">
                  Full Name
                </label>
                <input
                  type="fullname"
                  id="fullname"
                  className="form-control form-control-lg"
                  placeholder="full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" for="form3Example3">
                  Contact No
                </label>
                <input
                  type="contactno"
                  id="contactno"
                  className="form-control form-control-lg"
                  placeholder="contact no"
                  value={contactno}
                  onChange={(e) => setContactno(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" for="form3Example3">
                  Country
                </label>
                <input
                  type="Country"
                  id="addreCountryss"
                  className="form-control form-control-lg"
                  placeholder="address"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" for="form3Example3">
                  Visa Expired Date
                </label>
                <input
                  type="Visa Expired Date"
                  id="Visa Expired Date"
                  className="form-control form-control-lg"
                  placeholder="NIC"
                  value={exd}
                  onChange={(e) => setExd(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">

              <button className="button btn mt-3 " type="submit">
                Generate
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="output-box mt-5" style={{width:"40%",marginLeft:"10%"}}>
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button ">Download</button>
        </a>
      </div>
    </div>
  );
};
