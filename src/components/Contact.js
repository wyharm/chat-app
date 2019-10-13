import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online
    };
  }
  eventListener = () => {
    const newOnline = !this.state.online;
    this.setState({ online: newOnline });
  };
  render(){
  return (
    <div className="Contact">
      <img className="avatar" src={this.props.image} alt="" />
      <div>
        <h4 className="name">{this.props.name}</h4>
        <div className="status" onClick={this.eventListener}>
          <span className={(this.state.online? "status-online" : "status-offline")}></span>
          <p className="status-text">{(this.state.online ? "Online" : "Offline")}</p>
        </div>
      </div>
    </div>
  );
}}
export default Contact;
