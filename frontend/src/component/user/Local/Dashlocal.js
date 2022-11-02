import React, { useEffect, useState } from "react";
import { Tokenlocal } from "./Tokenlocal";

export const Dashlocal = () => {
  const [item, setItem] = useState();
  const [name, setName] = useState();
  const [nic, setNic] = useState();
  const [email, setEmail] = useState();
  const [contactno, setContactno] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setItem(items);
      setName(items.fullname);
      setNic(items.nic);
      setAddress(items.address);
      setEmail(items.email);
      setContactno(items.contactno);
    }
  }, []);
  console.log(item);
  return (
    <div>
      <div className="" style={{ width: "30%", marginLeft: "35%",marginTop: "5%" }}>
        
        <h3 className="text-center">Genarate Token</h3>
        <div className="row ">
          <div className="col">
            <h6>Name</h6>
          </div>
          <div className="col">
            <h6>{name}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>NIC</h6>
          </div>
          <div className="col">
            <h6>{nic}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>Email</h6>
          </div>
          <div className="col">
            <h6>{email}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>Contact No</h6>
          </div>
          <div className="col">
            <h6>{contactno}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>Address</h6>
          </div>
          <div className="col">
            <h6>{address}</h6>
          </div>
        </div>
      </div>
      <div>
        <Tokenlocal/>
      </div>
    </div>
  );
};
