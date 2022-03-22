import React from "react";

export default function ContactUsPage() {
  return (
    <div className="container my-3 bg-dark contactUsPageLayout">
      <div className="leftSideBox">
        <h2 className="my-3 text-center">Let's talk about everything!</h2>
        <center>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFyQTXsO7VG_lMipkaFxn8_8bf-YFX_aCkQ&usqp=CAU" className="contactPageLogo"
            alt=""
          />
        </center>
        <h6 className="text-center my-3">Feel free to ask anything!</h6>
        <div className="text-center my-3">
          Have doubt or suggestion to make? Feel free to ask anything. If you
          have any suggestions, please let me know. Your suggestions are highly
          appreciated. I appreciate your time and try hard to reply to every
          single message posted here! Keep dropping your priceless opinions.
        </div>
      </div>
      <div className="my-3 rightSideBox">
        <div className="my-3 container">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="my-3 container">
          <label htmlFor="name">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="my-3 container">
          <label htmlFor="name">Phone</label>
          <input type="text" className="form-control" />
        </div>
        <div className="my-3 container">
          <label htmlFor="name">Message</label>
          <textarea
            className="form-control"
            name=""
            id="validationTextarea"
            rows="10"
          ></textarea>
        </div>
        <div className="my-4 container d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
