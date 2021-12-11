import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="row">
        <div class="container col-md-4">
          <form action="#" method="POST" target="_blank">
            <h3 class="text-center jumbotron-heading">Contact Page</h3>
            <br></br>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                required
              ></input>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                name="message"
                class="form-control"
                id="message"
                rows="5"
                placeholder="Enter message"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary float-right">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
