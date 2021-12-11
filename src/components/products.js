import React from "react";
import "./index.css";
function Products() {
  return (
    <div className="products">
      <section id="introduction">
        <h1 class="jumbotron-heading mb-4">Product page</h1>
        <p class="lead text-muted">
          Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum es
          simplemente el texto de relleno de las. Lorem Ipsum es simplemente el
          texto de relleno de las
        </p>
      </section>
      <hr class="my-4"></hr>

      <section id="examples">
        <section class="text-center">
          <div class="row">
            <div class="col-lg-4 col-md-4 mb-4">
              <h5 class="mb-3 jumbotron-headin">product1</h5>

              <div class="view overlay z-depth-1-half rounded mb-3">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src="http://placehold.it/900x400"
                  alt=""
                />
                <a
                  href="https://mdbootstrap.com/previews/ecommerce-demo/examples/pages/basic/product.html"
                  target="_blank"
                >
                  <div class="mask rgba-white-light waves-effect waves-light"></div>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 mb-4">
              <h5 class="mb-3 jumbotron-headin">product2</h5>

              <div class="view overlay z-depth-1-half rounded mb-3">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src="http://placehold.it/900x400"
                  alt=""
                />
                <a
                  href="https://mdbootstrap.com/previews/ecommerce-demo/examples/pages/organic/product.html"
                  target="_blank"
                >
                  <div class="mask rgba-white-light waves-effect waves-light"></div>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 mb-4">
              <h5 class="mb-3 jumbotron-headin">product3</h5>

              <div class="view overlay z-depth-1-half rounded mb-3">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  src="http://placehold.it/900x400"
                  alt=""
                />
                <a
                  href="https://mdbootstrap.com/previews/ecommerce-demo/examples/pages/furniture/product.html"
                  target="_blank"
                >
                  <div class="mask rgba-white-light waves-effect waves-light"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Products;
