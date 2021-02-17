import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };
  }
    render() {
     return(
      <div id="contact" className="contact-container contrainer-fluid">
      <div>
      <h1 className="contact-header">Get in touch..</h1>
      </div>
      <form id="contact-form"  onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="col-md-12">
      <label htmlFor="name">Name:</label>
        <input id="name"
               className="input-style"
               type="text"
               value={this.state.name}
               onChange={this.handleChange.bind(this)}
               required
           />
      </div>
      <div className="col-md-12">
      <label htmlFor="email">Email:</label>
        <input id="email"
               className="input-style"
               type="email"
               name="email"
               value={this.state.email}
               onChange={this.handleChange.bind(this)}
               required
               />
      </div>
      <div className="col-md-12">
        <label htmlFor="message">Message:</label>
        <textarea  id="message"
                   className="input-style"
                   value={this.state.message}
                   onChange={this.handleChange.bind(this)}
                   required
                    />
      </div>

      <button type="submit" className="btn btn-primary contact-button">Submit</button>

      </form>

    </div>
     )
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }
}

export default ContactForm;
