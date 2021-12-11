import React from "react";
import grey from "./grey.jpeg";
import "./index.css";
function Services() {
  return (
    <div className="services">
      <section id="services" class="container">
        <h2 class="jumbotron-heading mb-4 text-center service">Service Page</h2>

        <div class="row text-center">
          <div class="con col-md-4 mb-4">
            <div class="card h-100">
              <img src={grey} class="card-img-top" />

              <div class="card-body">
                <h4 class="card-title lead text-muted">Lorem</h4>
                <p class="card-text">
                  Ipsum es simplemente el texto de relleno de las Lorem Ipsum es
                  simplemente el texto de re
                </p>
              </div>
              <div class="card-footer py-4">
                <a href="#" class="btn btn-secondary">
                  lorem &raquo;
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src={grey} class="card-img-top" />
              <div class="card-body">
                <h4 class="card-title lead text-muted">Ipsum</h4>
                <p class="card-text">
                  Ipsum es simplemente el texto de relleno de las Lorem Ipsum es
                  simplemente el texto de re
                </p>
              </div>
              <div class="card-footer py-4">
                <a href="#" class="btn btn-secondary">
                  ipsum &raquo;
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src={grey} class="card-img-top" />
              <div class="card-body">
                <h4 class="card-title lead text-muted">Mento</h4>
                <p class="card-text">
                  Ipsum es simplemente el texto de relleno de las Lorem Ipsum es
                  simplemente el texto de re
                </p>
              </div>
              <div class="card-footer py-4">
                <a href="#" class="btn btn-secondary">
                  mento &raquo;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
