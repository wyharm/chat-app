import React from "react";
import "./Contact.css";

function Contact(props) {
  const test = props.online;
  return (
    <div className="Contact">
      <img className="avatar" src={props.image} alt="" />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <span className={test ? "status-online" : "status-offline"}></span>
          <p className="status-text">{test ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
