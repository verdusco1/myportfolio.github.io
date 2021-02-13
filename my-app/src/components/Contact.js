import React from "react";

function Contact(props) {
    return (

    <div id="contact" className="contact-container contrainer-fluid">
      <div>
      <h1 className="contact-header">Get in touch..</h1>
      </div>
      <form className="">
      <div className="col-md-12">
        <input id="name" className="input-style" type="text" name="name" placeholder="Name"/>
      </div>
      <div className="col-md-12">
        <input id="email" className="input-style" type="email" name="email" placeholder="Email"/>
      </div>
      <div className="col-md-12">
        <textarea  id="message" className="input-style" placeholder="Message"/>
      </div>

      <button type="submit" className="btn btn-primary contact-button">Submit</button>

      </form>

    </div>


    )
}

export default Contact;
